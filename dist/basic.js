"use strict";
class Category {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
class Product {
    constructor(name, price, description, status) {
        this.category = [];
        this.nameP = name;
        this.priceP = price;
        this.descriptionP = description;
        this.statusP = status;
    }
    addCategory(newCategory) {
        this.category.push(newCategory);
    }
    getCategory() {
        return this.category;
    }
}
const lanches = new Category('Lanches', 'Produtos totalmente Rustico');
const pastelC = new Product('Pastel de Carne', 25, 'Paste de carne bovina', true);
//pastelC.addCategory(lanches)
console.log(pastelC.getCategory());
