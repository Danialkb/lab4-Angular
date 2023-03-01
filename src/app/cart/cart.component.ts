import { Component } from '@angular/core';
import {CartService} from "../cart.service";
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {Product} from "../products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert('Your order has been submitted ' + this.checkoutForm.value.name);
    this.checkoutForm.reset();
  }

  deleteItem(p: Product) {
    this.items = this.items.filter(prod => prod.id != p.id);
    this.cartService.deleteItem(p);
  }

}
