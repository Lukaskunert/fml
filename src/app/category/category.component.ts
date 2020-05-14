import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../Services/category.service';
import {HttpClient} from '@angular/common/http';
import {Categoryinfo} from '../models/Categoryinfo.model';
import {Product} from '../models/Product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categories: Categoryinfo;
  public prodct: Product[];

  constructor(private httpClient: HttpClient, private category: CategoryService, private route: ActivatedRoute, private router: Router) {
  }

  Link(id) {
    this.router.navigate(['/products'], {queryParams: {id}});
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.category.getCategoryById(params.id)
          .subscribe((category: Categoryinfo) => {
            this.categories = category;
            this.prodct = category.products;
          });
      });

  }
}
