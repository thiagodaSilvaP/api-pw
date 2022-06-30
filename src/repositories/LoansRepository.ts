import { where } from "sequelize/types";
import {
  ICreateDTO,
  IDeleteDTO,
  IRepository,
  IUpdateDTO,
  LoanData,
} from "../interface/IRepository";

interface completeOrIncompleteLoanDTO {
  id: number,
  data: Pick<LoanData, 'situation'>
}

class LoansRepository implements IRepository {
  constructor(private client: any) {}

  async create({ data }: ICreateDTO): Promise<LoanData> {
    return await this.client.create({ ...data });
  }

  async read(): Promise<LoanData[]> {
    return await this.client.findAll();
  }

  async update({ data, id }: IUpdateDTO): Promise<any> {
    return await this.client.update(
      { ...data },
      {
        where: { id: id },
      }
    );
  }
  async delete({ id }: IDeleteDTO) {
    return await this.client.destroy({ where: { id: id } });
  }

  async completeOrIncompleteLoan({id,data}: completeOrIncompleteLoanDTO) {
    return await this.client.update(
      { ...data },
      {
        where: { id: id },
      }
    );
  }
}

export { LoansRepository };
