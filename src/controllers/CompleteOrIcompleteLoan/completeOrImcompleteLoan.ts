import {Request, Response} from 'express';
import { Loans } from '../../models/Loans';
import { LoansRepository } from '../../repositories/LoansRepository';


export const completeOrIncompleteLoan = async (request: Request ,response: Response ): Promise<any> => {
    const {situation} = request.body
    const id = Number(request.params.id)

    return await new LoansRepository(new Loans().loans).completeOrIncompleteLoan({data: {
        situation: situation
    }, id: id})
}