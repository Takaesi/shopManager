import express from "express";

const app = express();
app.use(express.json()); // чтоб мог работать с json

// проверка работоспособности
app.get("/health", (req: express.Request, res: express.Response) => {
  res.status(200).send("servise is working");
});

import router from "./routes/mainRoutes.ts";

app.use("/", router);

// запуск сервера
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

