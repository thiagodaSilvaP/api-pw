import express from "express";
import cors from 'cors';
import { router } from "./routes/routes";
import { Loans } from "./models/Loans";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
app.use(router);

new Loans()


app.listen(process.env.PORT || 3000, () => console.log("Server is running"));
