import {Request, Response} from 'express';
import { ICreateDTO, LoanData } from "../../interface/IRepository";
import { Loans } from '../../models/Loans';
import { LoansRepository } from '../../repositories/LoansRepository';

export const deleteLoan = async (request: Request ,response: Response ): Promise<any> => {
    const id = Number(request.params.id)

    return await new LoansRepository(new Loans().loans).delete({id: id})
}