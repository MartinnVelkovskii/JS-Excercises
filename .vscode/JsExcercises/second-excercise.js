let products = [
  { product: "Shirt", price: 10 },
  { product: "Laptop", price: 2400 },
  { product: "Bike", price: 450 },
  { product: "Chair", price: 150 },
  { product: "Phone", price: 1500 },
  { product: "Shoes", price: 60 },
  { product: "Car", price: 25000 },
  { product: "Coffe Machine", price: 500 },
];

let sum = 0;

for (const product of products) {
  sum += product.price;
  if (product.price <= 100) {
    console.log(`Product Name: ${product.product},  Category: Cheap`);
  } else if (product.price >= 100 && product.price <= 500) {
    console.log(`Product Name: ${product.product},  Category: Normal Price`);
  } else if (product.price >= 500 && product.price <= 3000) {
    console.log(`Product Name: ${product.product},  Category: Expensive`);
  } else {
    console.log(`Product Name: ${product.product},  Category: Very Expensive`);
  }
}
console.log(`The sum of all products is: ${sum}`);
