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
  // Si le produit n'existe pas, sait-on jamais
  if (!product) {
   throw new Error("Produit invalide");
  }

  // Je mets à jour la liste de produit en déversant la liste initiale et en ajoutant le nouveau produit
  this.productsList = [...this.productsList, product];
 };

 removeProduct(productId: number): void {
  // Si la référence produit n'est pas un nombre
  if (typeof productId !== "number") {
   throw new Error("Référence produit invalide")
  }

  this.productsList = this.productsList.filter(clothe => (clothe.productId != productId));
 };

 calculateWeight() {
  let totalWeight = 0;

  this.productsList.map((clothe) => totalWeight += clothe.weight);

  return totalWeight;
 };

 // calculateTotal() {};

 // displayOrder() {};

}
