import { Router, Request, Response } from 'express'
import { title } from 'process'

const pageRouter = Router()

// Home
pageRouter.get("/", (req: Request, res: Response) => {
    res.status(200).render('index', {
        title: 'Homepage',
    })
})

// About
pageRouter.get('/about', (req: Request, res: Response) => {
    res.status(200).render('about',  {
        title: "About Us",
    })
})

// Contact
pageRouter.get('/contact', (req: Request, res: Response) => {
    res.status(200).render('contact',  {
        title: "contact me",
        contact: "My email: coolemail@hotmail.com",
    })
})

export default pageRouter