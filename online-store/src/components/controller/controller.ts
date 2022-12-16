
import { IProduct, IProducts } from '../../types/product.interface';
import Loader from './loader';

type NewType = (data: IProducts) => void;

class AppController extends Loader {
    getSources(callback: NewType) {
        super.getResp( 
            callback
        );
    }

}

export default AppController;
