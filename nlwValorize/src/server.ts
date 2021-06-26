import 'reflect-metadata' // necessário para notations do typeorm
import express from 'express'

import './database' // create connection

const app = express()

app.listen(3000, () => console.log('Server is running'))
