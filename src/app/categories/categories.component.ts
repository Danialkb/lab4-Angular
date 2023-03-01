import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../products";
import {categoriesList, Category} from "../categories";



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories: Category[] = categoriesList;
  constructor() {}
  ngOnInit(): void {

  }
}
