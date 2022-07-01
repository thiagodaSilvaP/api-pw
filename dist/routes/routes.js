"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const loansRouter_1 = require("./Loans/loansRouter");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (request, response) => {
    return response.send('Index page');
});
router.use('/loans', loansRouter_1.loansRouter);
