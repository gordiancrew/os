import { IProduct, IProducts } from '../../types/product.interface';
type NewType = (data: IProducts) => void;
class Loader {
    getSources(callback: NewType) {
        this.getResp(callback);
    }

    getResp(
        callback = (data: IProducts) => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', callback);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    load(method: string, callback: (data: IProducts) => void): void {
        fetch('https://dummyjson.com/products', { method })
            .then(this.errorHandler)
            .then((res2) => res2.json())
            .then((data: IProducts) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
