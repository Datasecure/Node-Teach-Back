import * as FS from 'fs'

const file = 'movies.txt'

// Read the docs: https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
FS.readFile(file, 'utf8', (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
