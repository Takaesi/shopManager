import express from "express";
import cors from "cors";
import router from "./routes/mainRoutes.ts";



const app = express();
app.use(express.json()); // чтоб мог работать с json
app.use(cors({origin: "http://localhost:5173"}))
// проверка работоспособности
app.get("/health", (req: express.Request, res: express.Response) => {
  res.status(200).send("servise is working");
});



app.use("/", router);

// запуск сервера
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

