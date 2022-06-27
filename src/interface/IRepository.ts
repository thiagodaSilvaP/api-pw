interface LoanData {
    id: number;
    student: string,
    book: string,
    deliveryDate: Date
}
interface ICreateDTO {
    data: Omit<LoanData, 'id'>
}

class IRepository {
    create({data}: ICreateDTO):void {
        throw new Error('This method inst implemented')
    }
    // all() {
    //     throw new Error('This method inst implemented')
    // }
    // update({data, id}: IUpdateDTO) {
    //     throw new Error('This method inst implemented')
    // }
    // delete({id}: IDeleteDTO) {
    //     throw new Error('This method inst implemented')
    // }
}

export {IRepository, ICreateDTO, LoanData}