import express from "express";
import { sequelize } from "./database/connection";
import { Loans } from "./models/Loans";
import { LoansRepository } from "./repositories/LoansRepository";
import { router } from "./routes/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(router);


app.listen(8080, () => console.log("Server is running"));
