export interface IHttpResp {
    code: string;
    message: string;
    data: IRespData | null
}
export interface IRespData {
    lastBuildDate: string;
    total: number;
    start: number;
    display: number;
    type: string;
    items: INewsData[] | IBookData[];
}

export interface INewsData {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
}

interface IBookData {
    title: string;
    link: string;
    image: string;
    author: string;
    price: string;
    discount: string;
    publisher: string;
    pubdate: string;
    isbn: string;
    description: string;
}