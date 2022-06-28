import {Request, Response} from 'express';
import { ICreateDTO, LoanData } from "../../interface/IRepository";
import { Loans } from '../../models/Loans';
import { LoansRepository } from '../../repositories/LoansRepository';

export const findLoans = async (request: Request ,response: Response ): Promise<LoanData[]> => {
    return await new LoansRepository(new Loans().loans).read()
}