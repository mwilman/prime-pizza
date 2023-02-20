import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {PRODUCTS} from "./types/PRODUCTS";
import {Product} from "./types/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS)
  }
}
