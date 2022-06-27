import { ICreateDTO, IRepository, LoanData } from '../interface/IRepository';

class LoansRepository implements IRepository {
    constructor(private client: any) {}

    async create({ data }: ICreateDTO): Promise<LoanData> {
        return await this.client.create({...data})
    }
}

export {LoansRepository}