import {Category} from './Category.model';
import {Product} from './Product.model';

export class Categoryinfo {
    constructor(public category: Category, public currentPage: number, public pagesCount: number, public products: Product[]){
        
    }
}