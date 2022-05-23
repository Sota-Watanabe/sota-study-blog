import express from 'express';
import dotenv from 'dotenv';
const app = express();
const models = require('../database/models')
dotenv.config();

//for parsing application/json
app.use(express.json())

//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

app.get('/api', (_, response) => {
  response.send('hello express');
})

app.post('/api/articles', async (request, response) => {
  if (!request.body.id ||
    !request.body.thumbnailPath ||
    !request.body.title ||
    !request.body.body ||
    request.body.isDist === undefined
  ) {
    response.status(400).send('bad request')
    return
  }

  models.Article.build({
    thumbnail_path: request.body.thumbnailPath,
    title: request.body.title,
    body: request.body.body,
    is_dist: request.body.isDist,
  })
  .save()
  response.sendStatus(201);
})

export default app;
