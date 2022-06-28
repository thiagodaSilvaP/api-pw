import {Router, Request, Response} from 'express';
import { CreateLoanController } from '../../controllers/CreateLoan/CreateLoanController';
import { deleteLoan } from '../../controllers/DeleteLoan/deleteLoan';
import { findLoans } from '../../controllers/ReadLoans/findLoans';

const loansRouter = Router()

loansRouter.post('/create',  async (request: Request, response: Response): Promise<Response> =>  {
   return await response.status(201).json({data: await CreateLoanController(request, response)})
})
loansRouter.get('/',  async (request: Request, response: Response): Promise<Response> =>  {
   return await response.status(201).json({data: await findLoans(request, response)})
})
loansRouter.delete('/:id',  async (request: Request, response: Response): Promise<Response> =>  {
   return await response.status(201).json({data: await deleteLoan(request, response)})
})

export {loansRouter}