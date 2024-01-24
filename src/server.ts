import express from 'express';
const app = express()

import { parse_args } from './core/commands'
import dotenv from 'dotenv'
dotenv.config()
import apiRoutes from './app/web/routes/api'

const options: { /* port: number */ } = parse_args()
// const PORT = options.port || 5000
const PORT = process.env.APP_PORT || 5000

// const apiRoutes = 
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})