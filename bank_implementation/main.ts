import Bank from './bank'

const file = 'bank.txt'
const action = process.argv[2]
const amount = process.argv[3]
const bank = new Bank(file)

switch (action.toUpperCase()) {
  case 'TOTAL':
    bank.total().then((value) => console.log(value)).catch((reason) => console.error(reason))
    break;
  case 'DEPOSIT': {
    let a = parseInt(amount)

    if (a !== NaN) {
      bank.deposit(a).catch((reason) => console.error(reason))
    }

    break
  }
  case 'WITHDRAW': {
    let a = parseInt(amount)

    if (a !== NaN) {
      bank.withdraw(a).catch((reason) => console.error(reason))
    }

    break
  }
  default:
    console.warn(`Unknown action: ${action}.`)
    break;
}
