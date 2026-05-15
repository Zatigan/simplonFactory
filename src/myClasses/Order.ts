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
  // J'actualise la liste de produits en renvoyant les articles avec un id différents de celui saisi
  this.productsList = this.productsList.filter(clothe => (clothe.productId != productId));
 };

 calculateWeight(): number {
  // Je déclare une variable pour faire le total du poids
  let totalWeight = 0;
  // Je parcours le tableau et pour chaque article, j'ajoute son poids à la variable du total
  this.productsList.map((clothe) => totalWeight += clothe.weight);
  return totalWeight;
 };

 calculateTotal(): number {
  // Je déclare une variable pour faire le total de la facture
  let invoice = 0;
  // Je parcours le tableau et pour chaque article, j'ajoute son poids à la variable du total de la facture
  this.productsList.map((clothe) => invoice += clothe.price)

  // J'utilise un parseFloat pour limiter mon retour à 2 chiffres après la virgule
  return parseFloat(invoice.toFixed(2));
 };

 displayOrder(): String {
  return `====== Informations client ======\n - ${this.customer.displayInfo()}, \n====== Liste des produits ====== ${this.productsList.map((clothe) => `\n - ${clothe.displayDetails()}`)}, \n====== Prix total ======  \n - ${this.calculateTotal()}€`;
 };

}
