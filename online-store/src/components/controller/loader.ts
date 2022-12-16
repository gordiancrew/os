import { IApiKey } from '../../types/apikey.interface';
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
        { options = {} }: IGetRespParam,
        callback = (data: IProducts) => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET',  callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }


    load(method: string,  callback: (data: IProducts) => void, options = {}): void {


        fetch('https://dummyjson.com/products', { method })
            .then(this.errorHandler)
            .then((res2) => res2.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err))
    }
}

export default Loader;
