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
  slideIndex = 1;

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

  plusSlide(i: number) {
    this.showSlides(this.slideIndex += i);
  }

  curSlide(i: number) {
    this.showSlides(this.slideIndex = i);
  }

  showSlides(slideNumber: number) {
    let slides = [...document.getElementsByClassName("slides")];
    let dots = [...document.getElementsByClassName("dot")];
    if(slideNumber > slides.length) {
      this.slideIndex = 1;
    }
    else if (slideNumber < 1) {
      this.slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for(let j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace("active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
