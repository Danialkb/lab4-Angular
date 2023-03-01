import {Component, OnInit} from '@angular/core';
import {Product, productsList} from "../products";
import {ActivatedRoute} from "@angular/router";
import {categoriesList} from "../categories";

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{
  categoryName: string;
  products: Product[];

  constructor(private route: ActivatedRoute) {
    this.categoryName = "";
    this.products = productsList;
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
    const cat = categoriesList.find(category => category.id === categoryIdFromRoute)
    if (cat) {
      this.products = productsList.filter(product => product.category.id === cat.id);
      this.categoryName = cat.name;
    }
  }

}
