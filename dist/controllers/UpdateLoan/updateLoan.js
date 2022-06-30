"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLoan = void 0;
const Loans_1 = require("../../models/Loans");
const LoansRepository_1 = require("../../repositories/LoansRepository");
const updateLoan = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { student, book, deliveryDate, } = request.body;
    const id = Number(request.params.id);
    console.log(deliveryDate, 'aaaaaaaaaaa');
    return yield new LoansRepository_1.LoansRepository(new Loans_1.Loans().loans).update({ data: {
            student,
            book,
            deliveryDate,
            situation: false
        }, id: id });
});
exports.updateLoan = updateLoan;
