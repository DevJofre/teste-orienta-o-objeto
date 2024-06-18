class Category {
    private readonly name: string;
    private description: string;

    constructor (name: string, description: string) {
        this.name = name
        this.description = description
    }

    public alterDescription(newDescription: string):void {
        if(newDescription.length < 5){
            throw new Error('Nome Invalido')
        }
        this.description = newDescription 
    }
}

class Product {
    private nameP: string;
    private priceP: number;
    private descriptionP: string;
    private statusP: boolean;
    private category: Category[] = []


    constructor (name: string, price: number, description: string, status: boolean){

        this.nameP = name
        this.priceP = price
        this.descriptionP = description
        this.statusP = status
    }

    public addCategory(newCategory: Category):void {
        this.category.push(newCategory)
    }

    public getCategory(): Category[] {
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

lanches.alterDescription('Nada')

console.log(pastelC)

