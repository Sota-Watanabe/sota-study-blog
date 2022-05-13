import express from 'express';
import dotenv from 'dotenv';
import { dbClient } from './clients/dbClient';
const app = express();

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
  await createArticle({
    body: request.body.body,
    id: request.body.id,
    thumbnailPath: request.body.thumbnailPath,
    title: request.body.title,
    isDist: request.body.isDist,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  response.send('OK');
})

const createArticle = async (obj) => {
  await dbClient.query( // インデント"'以外で`
    /* sql */`
    INSERT INTO articles (
      id
      ,thumbnail_path
      ,title
      ,body
      ,is_dist
      ,created_at
      ,updated_at
    ) VALUES (
      $id
      ,$thumbnailPath
      ,$title
      ,$body
      ,$isDist
      ,$createdAt
      ,$updatedAt
    )
    `,
    {
      bind: {
        id: obj.id,
        thumbnailPath: obj.thumbnailPath,
        title: obj.title,
        body: obj.body,
        isDist: obj.isDist,
        createdAt: obj.createdAt,
        updatedAt: obj.updatedAt
      }
    }
  );
  return true;
}

export default app;
