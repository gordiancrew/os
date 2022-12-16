import { IProduct, IProducts } from '../../types/product.interface';
import { IArticle, IArticles, IArticleSource, INewsAPI, INewsSorse } from './../../types/index';

import Sources from './sources/sources';

export class AppView {
    sources= new Sources();


    drawProducts(data: IProducts) {
        const values = data?.products ? data.products : [];
        localStorage.val = JSON.stringify(values);
        this.sources.draw(values);
    }
}

export default AppView;
