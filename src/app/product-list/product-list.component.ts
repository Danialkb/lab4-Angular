import {Component, Input} from '@angular/core';

import {Product, productsList} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = productsList;

  share(p: Product) {
    const url = encodeURI(p.prodLink);
    const telegram = `https://t.me/share/url?url=${url}`;
    const whatsapp = `https://api.whatsapp.com/send?text=${url}`;
    window.open(whatsapp);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
