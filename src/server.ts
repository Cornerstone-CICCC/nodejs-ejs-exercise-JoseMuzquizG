import express, { Request, Response } from 'express'
import pageRouter from './routes/page.routes'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// Set view engine to EJS
app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, '../src/views'))

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/', pageRouter)


// 404 Fallback
app.use((req: Request, res: Response) => {
    res.status(404).render("404")
})

// Start server
const PORT = 3700
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})