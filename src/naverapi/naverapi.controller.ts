import express, { Request, Response } from "express";
import { HttpResp } from "../entity/httpresp.entity";
import NaverApiService from "./naverapi.service";

const service = NaverApiService();
const NaverApiController = express.Router();

NaverApiController.get('/:type/:keyword', async (req: Request, res: Response) => {
    const httpResp: HttpResp = await service.search(req.params.type, req.params.keyword);
    res.send(httpResp);
});

export default NaverApiController;