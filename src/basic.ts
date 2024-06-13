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
    category: Category[] = []


    constructor (name: string, price: number, description: string, status: boolean){

        this.nameP = name
        this.priceP = price
        this.descriptionP = description
        this.statusP = status
    }

    addCategory(newCategory: Category):void {
        this.category.push(newCategory)
    }

    getCategory(): Category[] {
        return this.category
    }


}

const lanches = new Category('Lanches', 'Produtos totalmente Rustico')

const pastelC = new Product(
    'Pastel de Carne',
    25,
    'Paste de carne bovina',
    true,
)

pastelC.addCategory(lanches)

console.log(pastelC.getCategory())

