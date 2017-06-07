import * as Numeral from 'numeral'
import Bank from './bank'

Numeral.defaultFormat('$0,0.00')

const file = 'bank.txt'
const action = process.argv[2]
const amount = process.argv[3]
const bank = new Bank(file)

switch (action.toUpperCase()) {
  case 'TOTAL':
    bank.total()
      .then((value) => console.log(`Your balance is ${Numeral(value).format()}`))
      .catch((reason) => console.error(reason))
    break;
  case 'DEPOSIT': {
    let parsedAmount = parseFloat(amount)

    if (parsedAmount !== NaN) {
      bank.deposit(parsedAmount)
        .then(_ => console.log(`${Numeral(parsedAmount).format()} has been deposited`))
        .catch((reason) => console.error(reason))
    }

    break
  }
  case 'WITHDRAW': {
    let parsedAmount = parseFloat(amount)

    if (parsedAmount !== NaN) {
      bank.withdraw(parsedAmount)
        .then(_ => console.log(`${Numeral(parsedAmount).format()} has been withdrawn`))
        .catch((reason) => console.error(reason))
    }

    break
  }
  case 'LOTTO' :
    bank.lotto()
      .then(amount => {
        if (amount > 0) {
          console.log(`You won ${amount}!!!`)
        } else {
          console.log(`You just lost ${Numeral(-1 * amount).format()}!`)
        }
      })
      .catch((reason) => console.error(reason))
    break
  default:
    console.warn(`Unknown action: ${action}.`)
    break;
}
