import express from 'express';
const app = express()

import { parse_args } from './core/commands'
import dotenv from 'dotenv'
dotenv.config()

const options: { /* port: number */ } = parse_args()
// const PORT = options.port || 5000