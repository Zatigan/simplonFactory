class Customer {
 customerId: number;
 name: string;
 email: string;

 constructor(customerId: number, name: string, email: string) {
  this.customerId = customerId;
  this.name = name;
  this.email = email;
 }

 displayInfo(): string {
  return `Customer ID: ${this.customerId}, Name: ${this.name}, Email: ${this.email} `;
 }
}