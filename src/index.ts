// interface Human {
//   name: string;
//   age: number;
//   nationality: string;
// }

/* JS doesn't have interface, so if I want to show in js file, make class instead of interface */

class Human {
  public name: string;
  public age: number;
  public nationality: string;
  constructor(name: string, age: number, nationality?: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
}

const alex = new Human("Alex", 28, "Korean");

const intro = (person: Human): string => {
  return `Hello, My name is ${person.name}, age of ${person.age}, and I am a ${
    person.nationality
  }!!`;
};

console.log(intro(alex));

export {};

/* Because Node does not know TS, We should compile
 *    TS into JS. "Prestart" will be automatically executeed
 *    before "START"
 */
