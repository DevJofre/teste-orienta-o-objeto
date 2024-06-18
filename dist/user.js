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
}
exports.User = User;
class Admin extends User {
}
