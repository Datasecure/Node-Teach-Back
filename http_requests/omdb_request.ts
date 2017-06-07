import * as Request from 'request'

const uri = 'http://www.omdbapi.com/?t=Wonder+woman'

Request(uri, (err, res, body) => {
  if (err) {
    console.error(err)
  }

  if (res.statusCode === 200) {
    const json = JSON.parse(body)

    console.info(json)

    console.log(`The movie's rating is ${json.imdbRating}`)
  }
})
