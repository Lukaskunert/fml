import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../../Key';
import {Category} from '../models/Category.model';
import {Categoryinfo} from '../models/Categoryinfo.model';
import {Product} from '../models/Product.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private httpClient: HttpClient) {

   }
   getCategories() {
     const headers = new HttpHeaders().set('access-token', Token.access_token);
     return this.httpClient.get<Category[]>('api/categories/', {headers});
   }
   getCategoryById(id: number) {
    const headers = new HttpHeaders().set('access-token', Token.access_token);
    return this.httpClient.get<Categoryinfo>('api/categories/' + id, {headers});
   }
  getProductById(id: number) {
    const headers = new HttpHeaders().set('access-token', Token.access_token);
    return this.httpClient.get<Product>('api/products/' + id, {headers});
  }
}