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
        this.level = 1;
        this.name = name;
        this.email = email;
        this.active = active;
    }
    getLevel() {
        return this.level;
    }
}
exports.User = User;
class Admin extends User {
    constructor(name, email, active = false) {
        super(name, email, active);
        this.level += 1;
    }
    getName() {
        return `Admin: ${this.name}`;
    }
    levelUser() {
        return `O level desse Usuario é ${this.level}`;
    }
}
const adm1 = new Admin('Joao', "joao@gmail.com");
console.log(adm1);
const user1 = new User('Lucas', "lucasççç@gmail.com");
console.log(user1);
