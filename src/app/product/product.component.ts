import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product.model';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../Services/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: Product;
  router: any;
  pocet: number=1;

  plus() {
    this.pocet++;
  }
  minus() {
    if(this.pocet > 1)
      this.pocet--;
  }

  addToKosik(amount:number){
    let item={"id" : this.product.id, "amount" : this.pocet}
    let kosik:Array<any>=JSON.parse(localStorage.getItem("kosik"))
    kosik.push(item)
    localStorage.setItem("kosik",JSON.stringify(kosik))
  }
  
  constructor(private httpClient: HttpClient, private ctgry: CategoryService, private route: ActivatedRoute) { }
  getLink(id) {
    this.router.navigate(['/product'], {queryParams: {id}});
  }

  ngOnInit(): void {
    if(!localStorage.getItem("kosik")){
      localStorage.setItem("kosik","[]")
    }
    this.route.queryParams
      .subscribe(params => {
        this.ctgry.getProductById(params.id)
          .subscribe((products: Product) => {
            this.product = products;
          });
      });
  }
}
