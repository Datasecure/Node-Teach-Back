function longRunningFunctionSync(ms: number) {
  const date = Date.now()

  while(Date.now() - date <= ms) { }

  console.log('longRunningFunctionSync Done!')
}

function longRunningFunction(ms: number) {
  setTimeout(() => console.log('longRunningFunction Done!'), ms)
}

function shortRunningFunction() {
  console.log(`shortRunningFunction returned ${Math.random()}`)
}

longRunningFunctionSync(5000)
longRunningFunction(5000)
shortRunningFunction()
