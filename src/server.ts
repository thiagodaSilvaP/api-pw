import express from "express";
import cors from 'cors';
import { router } from "./routes/routes";
import { Loans } from "./models/Loans";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
app.use(router);

new Loans().loans.create({id: 2,book: 'Odisseia',deliveryDate: '2022-06-30',situation: false,student: 'Rafael'})


app.listen(8080, () => console.log("Server is running"));
