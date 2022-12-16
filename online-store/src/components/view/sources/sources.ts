import { IProduct } from '../../../types/product.interface';
import { INewsSorse } from './../../../types/index';
import './sources.css';

class Sources {
    draw(data: IProduct[]): void {

JSON.parse(localStorage.val).forEach((x:IProduct)=> console.log('!!!!!!!!!!!!!!!!!!!!!'+x.id))
       
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        console.log("data on source is :" + data);
        data.forEach((item) => {
            console.log('item is: ' + item);
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.title;
            
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.title);
            const imgItem = document.createElement('img');
            imgItem.classList.add('source__item_photo');
            imgItem.src = item.images[0];
            (sourceClone.querySelector('.source__item')as HTMLElement).appendChild(imgItem) ;

            const imgCategory=document.createElement('div');
            imgCategory.innerText=item.category;
            imgCategory.classList.add('.source__item-category');
            
            (sourceClone.querySelector('.source__item')as HTMLElement).appendChild(imgCategory) ;
            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}


// class Sources {
//     draw(data: NewsSorse[]): void {
//         const fragment = document.createDocumentFragment();
//         const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

//         data.forEach((item) => {
//             const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

//             (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
//             (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

//             fragment.append(sourceClone);
//         });

//         (document.querySelector('.sources') as HTMLElement).append(fragment);
//     }
// }

export default Sources;
