import express from 'express';
const app = express()

import { parse_args } from './core/commands'
import dotenv from 'dotenv'
dotenv.config()

const options: { /* port: number */ } = parse_args()
// const PORT = options.port || 5000
const PORT = process.env.APP_PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})