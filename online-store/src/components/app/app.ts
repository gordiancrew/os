import Loader from '../controller/loader';
import { AppView } from '../view/appView';
import Sources from '../view/sources/sources';
import { IProduct, IProducts } from '../../types/product.interface';

class App {
    loader: Loader = new Loader();
    view: AppView = new AppView();

    start() {
        this.loader.load('GET', (data) => this.view.drawProducts(data));
    }
}
let btnClear = document.querySelector('.btn1') as HTMLElement;
btnClear.onclick = function () {
    (document.querySelector('.sources') as HTMLElement).innerHTML = '';
};

let btnStartField = document.querySelector('.btn2') as HTMLElement;
btnStartField.onclick = function () {
    let data: IProduct[]= JSON.parse(localStorage.val);
    // const values:IProduct[] = data?.products ? data.products : [];
    // JSON.parse(localStorage.val).forEach((x: IProduct) => console.log('!!!!!!!!!!!!!!!!!!!!!' + x.category));
    (new Sources()).draw(data);
};

let btnLaptops = document.querySelector('.btn3') as HTMLElement;
btnLaptops.onclick = function () {
    let data:IProduct[] = JSON.parse(localStorage.val);
   data=data.filter((x)=>x.category === 'laptops');
   
        
   (new Sources()).draw(data);
};

let btnSmart = document.querySelector('.btn4') as HTMLElement;
btnSmart.onclick = function () {
    let data:IProduct[] = JSON.parse(localStorage.val);
   data=data.filter((x)=>x.category === 'smartphones');
   
        
   (new Sources()).draw(data);
};

export default App;
