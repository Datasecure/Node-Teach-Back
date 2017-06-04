import * as FS from 'fs'

const file = 'movies.txt'

FS.readFile(file, 'utf8', (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
