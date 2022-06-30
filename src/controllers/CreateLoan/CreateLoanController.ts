import {Request, Response} from 'express';
import { ICreateDTO, LoanData } from "../../interface/IRepository";
import { Loans } from '../../models/Loans';
import { LoansRepository } from '../../repositories/LoansRepository';

export const CreateLoanController = async (request: Request ,response: Response ): Promise<LoanData> => {
    const {student, book, deliveryDate} = request.body

    return await new LoansRepository(new Loans().loans).create({data:{student, book, deliveryDate: new Date(deliveryDate), situation: false}})
}