import { Router, Request, Response } from "express";
import { loansRouter } from "./Loans/loansRouter";

const router = Router()

router.use('/loans', loansRouter)

export {router}