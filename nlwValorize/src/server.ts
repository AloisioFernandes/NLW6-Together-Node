import 'reflect-metadata' // necessário para notations do typeorm
import express from 'express'

const app = express()

app.listen(3000, () => console.log('Server is running'))
