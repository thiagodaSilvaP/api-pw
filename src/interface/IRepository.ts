interface LoanData {
    id: number;
    student: string,
    book: string,
    deliveryDate: string,
    situation: boolean
}
interface ICreateDTO {
    data: Omit<LoanData, 'id'>;
}
interface IUpdateDTO {
    data: Omit<LoanData, 'id'>,
    id: number
}
interface IDeleteDTO {
    id: number;
}

class IRepository {
    create({data}: ICreateDTO):void {
        throw new Error('This method inst implemented')
    }
    read() {
        throw new Error('This method inst implemented')
    }
    update({data, id}: IUpdateDTO) {
        throw new Error('This method inst implemented')
    }
    delete({id}: IDeleteDTO) {
        throw new Error('This method inst implemented')
    }
}

export {IRepository, ICreateDTO, LoanData,IDeleteDTO,IUpdateDTO}