"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Address = void 0;
class Address {
    constructor(uf, city, road) {
        this.uf = uf;
        this.city = city;
        this.road = road;
    }
}
exports.Address = Address;
class User {
    constructor(name, email, active = false) {
        this.address = [];
        this.active = false;
        this.name = name;
        this.email = email;
        this.active = active;
    }
    levelUser() {
        return 1;
    }
}
exports.User = User;
class Admin extends User {
    getName() {
        return `Admin: ${this.name}`;
    }
    levelUser() {
        return super.levelUser() + 1;
    }
}
const adm1 = new Admin('Joao', "joao@gmail.com");
console.log(adm1.levelUser());
const user1 = new User('Lucas', "lucasççç@gmail.com");
console.log(user1);
