import { Router, Request, Response } from "express";

const loansRouter = Router()

loansRouter.get('/', (request: Request, response: Response): Response => {
    return response.send('hELLO')
})

export {loansRouter}