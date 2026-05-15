import type { ClothingSize } from "../types/ClothingSize.js";
import { Product } from "./Product.js";


export class Clothing extends Product {
 size: ClothingSize;

 constructor(productId: number, name: string, weight: number, price: number, size: ClothingSize) {
  super(productId, name, weight, price);
  this.size = size;
 }

 displayDetails(): string {
  return `Product ID: ${this.productId}, Name: ${this.name}, Size: ${this.size}, Weight: ${this.weight}, Price: ${this.price}€`
 }

}