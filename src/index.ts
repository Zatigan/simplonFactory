import { Clothing } from "./myClasses/Clothing.js";
import { Customer } from "./myClasses/Customer.js";
import { Order } from "./myClasses/Order.js";
import { ClothingSize } from "./types/ClothingSize.js";

const pantalon = new Clothing(1, "bermuda", 5, 15, ClothingSize.L);
const chemise = new Clothing(2, "Chemise hawaienne", 1, 25.99, ClothingSize.XL);
const gerard = new Customer(154, "Gérard", "gégé@gégémail.com");
const gegeOrder = new Order(1, gerard, [], new Date());
gegeOrder.addProduct(pantalon);
console.log(gegeOrder);
gegeOrder.addProduct(chemise);
console.log(gegeOrder);
gegeOrder.removeProduct(1);
console.log(gegeOrder);
