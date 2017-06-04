import * as FS from 'fs'

const file = 'the_best.txt'

FS.readFile(file, 'utf8', (error, data) => {
  if (error) {
    console.error(error)
  } else {
    for (let line of data.split(',')) {
      console.log(line)
    }
  }
})
