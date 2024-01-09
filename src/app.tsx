import express, { Request, Response } from "express";
import path from "path";
import NaverApiController from "./naverapi/naverapi.controller";

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/search', NaverApiController);

app.listen('8001', () => {
    console.log('Server started');
});
