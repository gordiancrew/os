import { IProduct, IProducts } from '../../types/product.interface';
import { IArticle, IArticles, IArticleSource, INewsAPI, INewsSorse } from './../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IArticles): void {
        const values: Array<IArticle> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    // drawSources(data: INewsAPI) {
    //     const values: Array<INewsSorse> = data?.sources ? data?.sources : [];
    //     this.sources.draw(values);
    // }
    drawProducts(data: IProducts) {
       const values=data?.products? data.products:[];

        this.sources.draw(values);
    }
}

export default AppView;
