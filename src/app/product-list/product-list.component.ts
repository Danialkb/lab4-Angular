import { Component } from '@angular/core';

import { products } from '../../../../../Downloads/kuj4dz--run/src/app/products';
import {Product, productsList} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = productsList;

  share(p: Product) {
    const url = encodeURI(p.prodLink);
    const telegram = `https://t.me/share/url?url=${url}`;
    const whatsapp = `https://api.whatsapp.com/send?text=${url}`;
    window.open(whatsapp);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  // showSlides(slideIndex);

  // plusSlide(i: number, p: Product) {
  //   this.showSlides(p.slideNumber += i, p);
  // }
  //
  // curSlide(i: number, p: Product) {
  //   this.showSlides(p.slideNumber = i, p);
  // }

  // showSlides(slideNumber: number, p: Product) {
  //   const productContainer = document.querySelector(`.product-list-item[data-product-id="${p.id}"]`);
  //   // @ts-ignore
  //   const slides = productContainer.querySelectorAll(".slides");
  //   // @ts-ignore
  //   const dots = productContainer.querySelectorAll(".dot");
  //
  //   // // @ts-ignore
  //   // let slides = [...document.getElementsByClassName("slides")];
  //   // // @ts-ignore
  //   // let dots = [...document.getElementsByClassName("dot")];
  //   if(slideNumber > slides.length) {
  //     p.slideNumber = 1;
  //   }
  //   else if (slideNumber < 1) {
  //     p.slideNumber = slides.length;
  //   }
  //   for(let i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for(let j = 0; j < dots.length; j++) {
  //     dots[j].className = dots[j].className.replace("active", "");
  //   }
  //   slides[p.slideNumber - 1].style.display = "block";
  //   dots[p.slideNumber - 1].className += " active";
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
