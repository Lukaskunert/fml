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
  
  constructor(private httpClient: HttpClient, private ctgry: CategoryService, private route: ActivatedRoute) { }
  getLink(id) {
    this.router.navigate(['/product'], {queryParams: {id}});
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.ctgry.getProductById(params.id)
          .subscribe((products: Product) => {
            this.product = products;
          });
      });
  }
}
