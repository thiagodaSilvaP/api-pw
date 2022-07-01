import { Router, Request, Response } from "express";
import { loansRouter } from "./Loans/loansRouter";

const router = Router()

router.get('/', (request: Request, response: Response) => {
    return response.send({message: 'oi'})
})
router.use('/loans', loansRouter)

export {router}