import express from 'express'
import { loansRouter } from './routes/routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(loansRouter)

app.listen(8080, () => console.log('Server is running'))