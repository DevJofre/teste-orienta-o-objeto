
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
    private active: boolean = false

    constructor (name: string, email: string, active: boolean = false) {
        this.name = name
        this.email = email
        this.active =  active
    }

    public levelUser():number {
        return 1
    }
}

class Admin extends User{
    getName(): string {
        return`Admin: ${this.name}`
    }
    
    public levelUser(): number {
        return super.levelUser() + 1
    }


}



const adm1 = new Admin('Joao', "joao@gmail.com")
console.log(adm1.levelUser())

const user1 = new User('Lucas', "lucasççç@gmail.com")
console.log(user1)



