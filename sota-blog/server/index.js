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
  const articles = await models.Article.findAll()
  response.status(200).json({ articles })
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
  response.status(201).json({ article })
})

app.put('/api/articles/:id', async (request, response) => {
  if (
    !request.body.thumbnailPath ||
    !request.body.title ||
    !request.body.body ||
    request.body.isDist === undefined
  ) {
    response.status(400).json({ message: 'bad request' })
    return
  }
  const target = await models.Article.findByPk(request.params.id)
  if (target == undefined) {
    response.status(400).json({ message: 'bad request' })
    return
  }
  const article = await target.update({
    thumbnail_path: request.body.thumbnailPath,
    title: request.body.title,
    body: request.body.body,
    is_dist: request.body.isDist,
  })
  response.status(200).json({ article })
})

app.delete('/api/articles/:id', async (request, response) => {
  const target = await models.Article.findByPk(request.params.id)
  if (target == undefined) {
    response.status(400).json({ message: 'bad request' })
    return
  }
  const article = await target.destroy()
  response.status(200).json({ article })
})

app.get('/api/articles/:id', async (request, response) => {
  const article = await models.Article.findByPk(request.params.id)
  if (article === undefined) {
    // 未確認
    response.status(400).json({ message: 'bad request' })
    return
  }
  response.status(200)
  return
})

export default app
