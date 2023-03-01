import {Component, OnInit} from '@angular/core';
import {Product, productsList} from "../products";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService, private location: Location) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = productsList.find(product => product.id === productIdFromRoute);
  }

  ngAfterViewInit() {
    if (this.product && this.product.images.length > 0) {
      this.product.slideNumber = 1
      this.showSlides(1, this.product);
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  deleteItem(p: Product) {
    const index = productsList.findIndex(product => product.id === p.id);
    if (index !== -1) {
      this.cartService.deleteItem(p);
      productsList.splice(index, 1);
      window.alert("Item successfully removed");
      this.location.back();
    }
  }

  like(p: Product) {
    const productId = p.id;
    const product = document.querySelector(`[product-id="${productId}"]`);
    // @ts-ignore
    const likes = product.querySelectorAll(".like-btn")
    console.log(likes);
    for(let i = 0; i < likes.length; i++) {
      console.log(likes[i].classList)
      if(likes[i].classList.contains("liked")){
        p.likes -= 1;
        likes[i].classList.remove("liked");
      }else {
        likes[i].classList.add("liked");
        p.likes++;
      }
    }

  }

  plusSlide(i: number, p: Product | undefined) {
    // @ts-ignore
    this.showSlides(p.slideNumber += i, p);
  }

  curSlide(i: number, p: Product | undefined) {
    // @ts-ignore
    this.showSlides(p.slideNumber = i, p);
  }

  showSlides(slideNumber: number, p: Product | undefined) {
    console.log(p);
    const productContainer = document.querySelector(`.product-list-item`);
    // @ts-ignore
    const slides = Array.from(productContainer.querySelectorAll(".slides")) as HTMLElement[];

    // @ts-ignore
    const dots = productContainer.querySelectorAll(".dot");
    console.log(slides);
    if(slideNumber > slides.length) {
      // @ts-ignore
      p.slideNumber = 1;
    }
    else if (slideNumber < 1) {
      // @ts-ignore
      p.slideNumber = slides.length;
    }
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for(let j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace("active", "");
    }
    // @ts-ignore
    slides[p.slideNumber - 1].style.display = "block";
    // @ts-ignore
    dots[p.slideNumber - 1].className += " active";
  }

}
