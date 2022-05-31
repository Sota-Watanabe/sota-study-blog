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

app.get('/api/articles', async (_, response) => {
  const users = await models.Article.findAll()
  response.status(200).json({ message: users })
  return
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

  const article = await models.Article.create({
    thumbnail_path: request.body.thumbnailPath,
    title: request.body.title,
    body: request.body.body,
    is_dist: request.body.isDist,
  })
  response.status(201).json({ message: article })
})

app.get('/api/articles/:id', async (request, response) => {
  const article = await models.Article.findAll({
    where: {
      id: request.params.id,
    },
  })
  response.status(200).json({ article })
  return
})

export default app
