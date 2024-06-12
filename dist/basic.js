"use strict";
class Category {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
class Product {
    constructor(category, name, price, description, status) {
        this.category = category;
        this.nameP = name;
        this.priceP = price;
        this.descriptionP = description;
        this.statusP = status;
    }
}
const lanches = new Category('Lanches', 'Produtos totalmente Rustico');
const pastelC = new Product(lanches, 'Pastel de Carne', 25, 'Paste de carne bovina', true);
console.log(pastelC);
