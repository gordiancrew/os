import { IArticles } from '../../types/articles.interface';
import { INewsAPI } from '../../types/newsSorses.interface';
import { IProduct, IProducts } from '../../types/product.interface';
import AppLoader from './appLoader';

type NewType = (data: IProducts) => void;

class AppController extends AppLoader {
    getSources(callback: NewType) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

}

export default AppController;
