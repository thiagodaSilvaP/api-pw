import {Request, Response} from 'express';
import { ICreateDTO, LoanData } from "../../interface/IRepository";
import { Loans } from '../../models/Loans';
import { LoansRepository } from '../../repositories/LoansRepository';

export const updateLoan = async (request: Request ,response: Response ): Promise<any> => {
    const {student, book, deliveryDate} = request.body
    const id = Number(request.params.id)
    
    return await new LoansRepository(new Loans().loans).update({data: {
        student,
        book,
        deliveryDate: new Date(deliveryDate)
    }, id: id})
}