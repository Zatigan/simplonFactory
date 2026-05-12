import { ShoeSize } from "../types/ShoeSize.js";
import { Product } from "./Product.js";

export class Shoes extends Product {
 size: ShoeSize;

 constructor(productId: number, name: string, weight: number, price: number, size: ShoeSize) {
  super(productId, name, weight, price);
  this.size = size;
 }

 displayDetails(): string {
  return `Product ID: ${this.productId}, Name: ${this.name}, Size: ${this.size}, Weight: ${this.weight}, Price: ${this.price}€`
 }
}