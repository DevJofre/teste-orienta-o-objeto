
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
    private name: string;
    private email: string;
    private address: Address[] = []; 
    private active: boolean = false

    constructor (name: string, email: string, active: boolean = false) {
        this.name = name
        this.email = email
        this.active =  active
    }    
}

class Admin extends User{}