interface INewsData {
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

interface INaverApiResp{
    lastBuildDate: '',
    total: 0,
    start: 0,
    display: 0,
    items: INewsData[] | IBookData[];
} 

export {
    INaverApiResp,
    INewsData,
    IBookData
}