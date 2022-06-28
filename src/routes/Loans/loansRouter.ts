import {Router, Request, Response} from 'express';
import { CreateLoanController } from '../../controllers/CreateLoan/CreateLoanController';
import { findLoans } from '../../controllers/ReadLoans/findLoans';

const loansRouter = Router()

loansRouter.post('/create',  async (request: Request, response: Response): Promise<Response> =>  {
   return await response.status(201).json({data: await CreateLoanController(request, response)})
})
loansRouter.get('/',  async (request: Request, response: Response): Promise<Response> =>  {
   return await response.status(201).json({data: await findLoans(request, response)})
})

export {loansRouter}