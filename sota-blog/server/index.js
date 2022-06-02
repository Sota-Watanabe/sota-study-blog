/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express'
import dotenv from 'dotenv'
const app = express()
const models = require('../database/models')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })
// const upload = multer({ dest: './server/public/uploads/' })
app.use(express.static(__dirname + '/public'))

dotenv.config()

//for parsing application/json
app.use(express.json())

//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// for multer
app.post('/upload', upload.single('file'), function (req, res, next) {
  console.log(req.file)
  // これで取得可能
  // http://localhost:3000/public/uploads/7e3d2b670048acddb03cd2edd55236b1

  res.send('ファイルのアップロードが完了しました。')
})

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
