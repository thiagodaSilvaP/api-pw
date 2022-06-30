import {Request, Response} from 'express';
import { ICreateDTO, LoanData } from "../../interface/IRepository";
import { Loans } from '../../models/Loans';
import { LoansRepository } from '../../repositories/LoansRepository';

export const updateLoan = async (request: Request ,response: Response ): Promise<any> => {
    const {student, book, deliveryDate,} = request.body
    const id = Number(request.params.id)

    console.log(deliveryDate, 'aaaaaaaaaaa')
    
    return await new LoansRepository(new Loans().loans).update({data: {
        student,
        book,
        deliveryDate,
        situation: false
    }, id: id})
}