import express from 'express';
import todoRouter from "./routes/todo.js";
const app = express();
app.use(express.json());
app.use(todoRouter);
app.use((err, req, res, next) => {
    res.status(500).json({ message: "An error occured!" });
});
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.listen(3000, () => {
    console.log("Server Running on 3000");
});
// const server = createServer((req,res) => {
//     console.log(req.method);
//     res.end('Hello World')
// });
// server.listen(3000);
