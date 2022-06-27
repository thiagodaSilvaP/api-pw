import {Router, Request, Response} from 'express';
import { CreateLoanController } from '../../controllers/CreateLoan/CreateLoanController';

const loansRouter = Router()

loansRouter.post('/create',  async (request: Request, response: Response): Promise<Response> =>  {
   return await response.status(201).json({data: await CreateLoanController(request, response)})
})

export {loansRouter}