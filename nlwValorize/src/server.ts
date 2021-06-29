import 'reflect-metadata' // necessário para notations do typeorm
import express from 'express'

import { router } from './routes'

import './database' // create connection

const app = express()

app.use(express.json())

app.use(router)

app.listen(3000, () => console.log('Server is running'))
