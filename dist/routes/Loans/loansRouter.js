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
exports.loansRouter = void 0;
const express_1 = require("express");
const completeOrImcompleteLoan_1 = require("../../controllers/CompleteOrIcompleteLoan/completeOrImcompleteLoan");
const CreateLoanController_1 = require("../../controllers/CreateLoan/CreateLoanController");
const deleteLoan_1 = require("../../controllers/DeleteLoan/deleteLoan");
const findLoans_1 = require("../../controllers/ReadLoans/findLoans");
const updateLoan_1 = require("../../controllers/UpdateLoan/updateLoan");
const loansRouter = (0, express_1.Router)();
exports.loansRouter = loansRouter;
loansRouter.post('/create', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return yield response.status(201).json({ data: yield (0, CreateLoanController_1.CreateLoanController)(request, response) });
}));
loansRouter.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return yield response.status(201).json({ data: yield (0, findLoans_1.findLoans)(request, response) });
}));
loansRouter.delete('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return yield response.status(201).json({ data: yield (0, deleteLoan_1.deleteLoan)(request, response) });
}));
loansRouter.put('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return yield response.status(201).json({ data: yield (0, updateLoan_1.updateLoan)(request, response) });
}));
loansRouter.patch('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return yield response.status(201).json({ data: yield (0, completeOrImcompleteLoan_1.completeOrIncompleteLoan)(request, response) });
}));
