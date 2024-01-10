import React,{useState,useEffect} from 'react';
import { IHttpResp, IRespData ,INewsData} from "../interface/apidata.interface";
import NewsRow from '../components/NewsRow.component';

const ListView = () => {
    const [articles, setArticles] = useState<IRespData | null>(null);


const apiGet = async(type: string, param: string) => {
        const apiUrl: string = '/search/' + type + '/' + param;
        await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp: Response) => resp.json())
        .then((resp: IHttpResp) => {
            if (resp.code === '00') {
                setArticles(resp.data as IRespData);
                console.log(resp);
            } else {
                throw new Error('error');
            }
        });
    };

    useEffect(() => {
        apiGet('news', 'React');
    }, []);

return (
    <div className="listArea">
        <ul className="listView">
        {
            articles &&
            articles.items &&
            (
                (articles.type === 'news') ?
                    (articles.items as INewsData[]).map((v: INewsData, inx: number) => {
                        return <NewsRow key={inx} {...v} />
                    })
                : ''
            )
        }
        </ul>
    </div>
);
};
export default ListView;