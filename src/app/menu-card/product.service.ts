import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {PRODUCTS} from "./types/PRODUCTS";
import {Product} from "./types/product";
import {CardItem} from "./types/card-item";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cart: CardItem[] = [];
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS)
  }

  addToCart(product: Product) {
    if (this.cart.length && this.cart.some((item) => item.identifier === product.identifier)) {
      console.log(this.cart);
      console.log(product);
      const index = this.cart.findIndex((item) => item.identifier === product.identifier)
      this.cart[index].counter++;
    } else {
      let item = {
        counter: 1,
        ...product
      }
      this.cart.push(item);
    }
  }
}
