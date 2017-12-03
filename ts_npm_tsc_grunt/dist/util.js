"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.call = function () {
        return this.name + " has " + String(this.age);
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=util.js.map