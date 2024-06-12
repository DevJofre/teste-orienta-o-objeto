class Category {
    public name: string;
    public description: string;

    constructor (name: string, description: string) {
        this.name = name
        this.description = description
    }
}

class Product {
    nameP: string;
    priceP: number;
    descriptionP: string;
    statusP: boolean;
    category: Category


    constructor (category: Category, name: string, price: number, description: string, status: boolean){
        this.category = category
        this.nameP = name
        this.priceP = price
        this.descriptionP = description
        this.statusP = status
        

    }
}

const lanches = new Category('Lanches', 'Produtos totalmente Rustico')

const pastelC = new Product(
    lanches,
    'Pastel de Carne',
    25,
    'Paste de carne bovina',
    true,
)

console.log(pastelC)

