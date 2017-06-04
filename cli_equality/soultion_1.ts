export default function equalityTest() {
  // Pull arguments from CLI
  // Remember that argv is an array
  // All arrays in JS are 0 indexed
  // arg[0] = node, arg[1] = program
  // We use const here to prevent accidental mutations
  const num1 = parseInt(process.argv[2])
  const num2 = parseInt(process.argv[3])

  let areEqual = false

  // Remember '==' and '===' perform differently
  // '==': equality operator performs type conversion
  // '===': identity operator performs NO type conversion
  // It's best practice to use '===' for equality checks
  if (num1 === num2) {
    areEqual = true
  }

  console.log(`${num1} and ${num2} ${ areEqual ? 'are': 'are not' } equal.`)

  // BONUS
  let areMultiplesOfSeven = false

  if (num1 % 7 === 0 && num2 % 7 === 0) {
    areMultiplesOfSeven = true
  }

  console.log(`${num1} and ${num2} ${ areMultiplesOfSeven ? 'are': 'are not' } multiples of 7`)
}
