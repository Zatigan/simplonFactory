import { ClothingSize } from "../types/ClothingSize.js";
import { Clothing } from "./Clothing.js";
import { Customer } from "./Customer.js";
import type { Product } from "./Product.js";

export class Order {
 orderId: number;
 customer: Customer;
 productsList: Product[];
 date: Date;

 constructor(orderId: number, customer: Customer, productList: Product[], date: Date) {
  this.orderId = orderId;
  this.customer = customer;
  this.productsList = productList;
  this.date = date;
 };

 addProduct(product: Product): void {
  if(!product) {
   throw new Error("Produit invalide");
  }

  this.productsList = [...this.productsList, product];
 };

 // removeProduct(productId: number) {};

 // calculateWeight() {};

 // calculateTotal() {};

 // displayOrder() {};

}
