"use strict";
class Category {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
const drinks = new Category('Bebidas', 'Desperte seus sentidos com um toque de sabor! Mergulhe em um universo de delícias refrescantes e revigorantes com nosso cardápio de bebidas!');
console.log(drinks);
const dessert = new Category("Sobremesa", "Desperte seus sentidos com um toque de sabor! Mergulhe em um universo de delícias refrescantes e revigorantes com nosso cardápio de bebidas!");
console.log(dessert);
