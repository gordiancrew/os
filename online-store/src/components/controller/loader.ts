import { IApiKey } from '../../types/apikey.interface';
import { IArticles } from '../../types/articles.interface';
import { INewsAPI } from '../../types/newsSorses.interface';
import { IGetRespParam, Options } from '../../types/getrespparms.interface';
import { IProduct, IProducts } from '../../types/product.interface';

class Loader {
    baseLink: string;
    options: IApiKey;
    constructor(baseLink: string, options: IApiKey) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: IGetRespParam,
        callback = (data: INewsAPI & IArticles&IProducts) => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: string): string {
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: INewsAPI & IArticles & IProducts) => void, options = {}): void {
        // fetch(this.makeUrl(options, endpoint), { method })
        //     .then(this.errorHandler)
        //     .then((res) => res.json())
        //     .then((data) => callback(data))
        //     .catch((err) => console.error(err));

        fetch('https://dummyjson.com/products', { method })
            .then(this.errorHandler)
            .then((res2) => res2.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err))
    }
}

export default Loader;
