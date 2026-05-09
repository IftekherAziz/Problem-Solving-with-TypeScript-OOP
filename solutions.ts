// Problem 1: Filter Even Numbers
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

// --------------------------------------------- //

// Problem 2: Reverse String
function reverseString(myString: string): string {
  return myString.split("").reverse().join("");
}

// --------------------------------------------- //

// Problem 3: Union Type & Type Guard
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
  if (typeof value === "string") return "String";
  return "Number";
}   

// --------------------------------------------- //

// Problem 4: Generic getProperty with Key Constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// --------------------------------------------- //

// Problem 5: Book Interface & toggleReadStatus
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

// --------------------------------------------- //

// Problem 6: Person class & Student subclass
class Person {
  constructor(protected name: string, protected age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, private grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// --------------------------------------------- //


// Problem 7: Array Intersection
function getIntersection(a: number[], b: number[]): number[] {
  const setB = new Set(b);
  return a.filter((n) => setB.has(n));
}
