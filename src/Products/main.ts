import { addProduct, calcStock, products } from "./product.service";  

addProduct({
    title: 'Pro1',
    createdAt: new Date(1991,6,7),
    stock: 20,
    size: 'L'
});
addProduct({
    title: 'Pro2',
    createdAt: new Date(1994, 2,3),
    stock: 12,
    size: 'M'
});
addProduct({
    title: 'Pro3',
    createdAt: new Date(1958, 4,14),
    stock: 5,
    size: 'XL'
});
console.log(products);
const totalStock = calcStock();
console.log(totalStock);