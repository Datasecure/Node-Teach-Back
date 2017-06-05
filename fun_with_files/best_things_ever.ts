import * as FS from 'fs'

const file = 'the_best.txt'

FS.readFile(file, 'utf8', (error, data) => {
  if (error) {
    console.error(error)
  } else {
    // split is a method on the string type that returns a string array
    for (let line of data.split(',')) {
      console.log(line)
    }
  }
})
