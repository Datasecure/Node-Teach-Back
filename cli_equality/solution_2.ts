export default function refactoredEqualityTest() {
  // Note that while the LOC is smaller, the amount of duplication is greater
  // Remember that high-level programming languages are for humans; strive for readability and maintainability over terseness
  console.log(`${parseInt(process.argv[2])} and ${parseInt(process.argv[3])} ${parseInt(process.argv[2]) === parseInt(process.argv[3]) ? 'are': 'are not.'} equal`)
  console.log(`${parseInt(process.argv[2])} and ${parseInt(process.argv[3])} ${(parseInt(process.argv[2]) + parseInt(process.argv[3])) % 7 === 0 ? 'are': 'are not'} multiples of 7`)
}
