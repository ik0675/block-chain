"use strict";
// interface Human {
//   name: string;
//   age: number;
//   nationality: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
/* JS doesn't have interface, so if I want to show in js file, make class instead of interface */
class Human {
    constructor(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
}
const alex = new Human("Alex", 28, "Korean");
const intro = (person) => {
    return `Hello, My name is ${person.name}, age of ${person.age}, and I am a ${person.nationality}!!`;
};
console.log(intro(alex));
/* Because Node does not know TS, We should compile
 *    TS into JS. "Prestart" will be automatically executeed
 *    before "START"
 */
//# sourceMappingURL=index.js.map