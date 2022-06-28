import { where } from 'sequelize/types';
import { ICreateDTO, IDeleteDTO, IRepository, IUpdateDTO, LoanData } from '../interface/IRepository';

class LoansRepository implements IRepository {
    constructor(private client: any) {}
    
    async create({ data }: ICreateDTO): Promise<LoanData> {
        return await this.client.create({...data})
    }
    
    async read(): Promise<LoanData[]> {
        return await this.client.findAll()
    }
    
    update({ data, id }: IUpdateDTO): void {
        throw new Error('Method not implemented.');
    }
    async delete({id}: IDeleteDTO) {
        return await this.client.destroy({where: {id: id}})
    }
}

export {LoansRepository}