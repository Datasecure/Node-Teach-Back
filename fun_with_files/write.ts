import * as FS from 'fs'

const file = 'movies.txt'
const contents = 'Inception, Die Hard'

// Note that the default encoding is utf-8
// This function takes a callback as fun of its arguments
// A callback is just a function you pass as an argument to another function to be run at a later time
// In the case below, this allows asynchronous code flow
// Since node is single-threaded (from the users context), it is important to not block the execution of other code
FS.writeFile(file, contents, (error) => {
  if (error) {
    // Since this operation can fail, we need to handle any errors
    console.error(error)
  } else {
    console.log('The file was updated!')
  }
})
