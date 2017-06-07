import * as Request from 'request'

const uri = 'https://news.ycombinator.com/'

Request(uri, (error, response, body) => {
  if (error) {
    return console.error(error)
  }

  if (response.statusCode === 200) {
    console.log(body)
  }
})
