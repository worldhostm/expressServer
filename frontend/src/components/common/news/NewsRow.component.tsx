import {INewsData} from '../../../interface/apidata.interface';
import moment from 'moment';

const NewsRow = ({ title, pubDate, description }: INewsData) => {  
    return (
        <li>
            <div className="title">
                <a href="#" dangerouslySetInnerHTML={{__html: title}} />
            </div>
            <div className="cont">
                <span className="date">{moment(pubDate).format('YYYY.MM.DD HH:mm')}</span>
                <span dangerouslySetInnerHTML={{__html: description}} />
            </div>
        </li>
    )
};
export default NewsRow;