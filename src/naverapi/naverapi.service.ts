import { HttpResp, RespData } from "../entity/httpresp.entity";
import { INaverApiResp } from "../interface/apidata.interface";

const NaverApiService = () => {
    const request = require('request');

    const search = async (type: string, param: string): Promise<HttpResp> => {

        return new Promise<HttpResp>((resolve, reject) => {
            const CLIENT_ID: string = 'ㅁㄴㅇㅁㄴㅇ';
            const CLIENT_SECRET: string = 'ㅁㄴㅇㄴㅁㅇㄴ';
    
            const apiUrl: string = 'https://openapi.naver.com/v1/search/' + type;
            
            request.get({
                headers: {
                    'Content-Type': 'application/json',
                    'X-Naver-Client-Id': CLIENT_ID,
                    'X-Naver-Client-Secret': CLIENT_SECRET
                },
                uri: apiUrl,
                qs: {
                    query: param
                },
                json: true
            }, (error: object, response: object, body: INaverApiResp) => {
                const httpResp: HttpResp = new HttpResp();
                const respData: RespData = new RespData(type);
                
                if (body) {
                    respData.setStart(body.start);
                    respData.setDisplay(body.display);
                    respData.setTotal(body.total);
                    respData.setItems(body.items);
        
                    httpResp.setCode('00');
                    httpResp.setMessage('Success');
                    httpResp.setData(respData);
                } else {
                    httpResp.setCode('99');
                    httpResp.setMessage('Failed');
                    httpResp.setData(null);
                }

                resolve(httpResp);
            });
        });
    }

    return {
        search
    }
};

export default NaverApiService;