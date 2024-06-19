
export class Address{
    private uf: string;
    private city: string;
    private road: string;

    constructor(uf: string, city: string, road: string) {
        this.uf = uf
        this.city = city
        this.road = road
    }

    

}

export class User {
    protected name: string;
    private email: string;
    protected address: Address[] = []; 
    private active: boolean
    protected level: number = 1

    constructor (name: string, email: string, active: boolean) {
        this.name = name
        this.email = email
        this.active =  active
    }

    getLevel(): number {
        return this.level
    }
}

export class Admin extends User{
    constructor (name: string, email: string, active: boolean, code: string ) {
        console.log(code)
        super(name, email, active)
        this.level += 1
    }

    getName(): string {
        return`Admin: ${this.name}`
    }
    
    public levelUser():string {
        return `O level desse Usuario é ${this.level}`
    }
}



const adm1 = new Admin('Joao', "joao@gmail.com", true, "VIP")
console.log(adm1)

const user1 = new User('Lucas', "lucasççç@gmail.com", true)
console.log(user1)



