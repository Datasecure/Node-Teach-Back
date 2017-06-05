import * as FS from 'fs'

const file = process.argv[2]

// Since using writeFile will over-write a file if it exists, we use appendFile to write contents to the end of the file.
// Just like writeFile, if the file doesn't exist, it is created
FS.appendFile(file, 'Hello Kitty', (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log('Content Added!')
  }
})
