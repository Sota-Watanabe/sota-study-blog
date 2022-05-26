import express from 'express'
import dotenv from 'dotenv'
const app = express()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const models = require('../database/models')
dotenv.config()

//for parsing application/json
app.use(express.json())

//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/api', (_, response) => {
  response.send('hello express')
})

app.post('/api/articles', async (request, response) => {
  if (
    !request.body.thumbnailPath ||
    !request.body.title ||
    !request.body.body ||
    request.body.isDist === undefined
  ) {
    response.status(400).json({ message: 'bad request' })
    return
  }

  const a = await models.Article.create({
    thumbnail_path: request.body.thumbnailPath,
    title: request.body.title,
    body: request.body.body,
    is_dist: request.body.isDist,
  })
  response.status(201).json({ message: a })
})

export default app
