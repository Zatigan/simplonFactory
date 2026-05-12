export abstract class Product {
 productId: number;
 name: string;
 weight: number;
 price: number;

 constructor(productId: number, name: string, weight: number, price: number) {
  this.productId = productId;
  this.name = name;
  this.weight = weight;
  this.price = price;
 }

 displayDetails(): string {
  return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight}, Price: ${this.price}€`
 }

}