import * as FS from 'fs'

export default class Bank {
  file: string

  constructor(file: string) {
    this.file = file
  }

  public async total() {
    const transactions = await this.getTransactions(this.file)
    const sum = transactions.length > 0 ? transactions.reduceRight((prev, curr) => prev + curr, 0) : 0

    return sum
  }

  public async deposit(amount: number) {
    try {
      await this.writeToFile(this.file, `${amount},`)
    } catch (e) {
      console.error(e)
    }
  }

  public async withdraw(amount: number) {
    try {
      await this.writeToFile(this.file, `-${amount},`)
    } catch (e) {
      console.error(e)
    }
  }

  public async lotto() {
    const magicNumber = 23
    const randomNumber = Math.floor(Math.random() * (100-1)) + 1

    if (magicNumber === randomNumber) {
      await this.deposit(randomNumber * 10)
    } else {
      await this.withdraw(randomNumber)
    }
  }

  private async getTransactions(file: string) {
    let transactions: number[] = []

    try {
      const contents = await this.readFromFile(file)

      if (contents) {
        for (let line of contents.split(',')) {
          transactions.push(parseInt(line))
        }
      }
    } catch (e) {
      console.error(e)
    }

    return transactions.filter(x => !isNaN(x))
  }

  private readFromFile(file: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      FS.readFile(file, 'utf8', (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  private writeToFile(file: string, data: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      FS.appendFile(file, data, (error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }
}
