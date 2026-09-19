// Type Annotation
const stringValue: string = "string_valu";
console.log(stringValue);

const numberValue: number = 20;
console.log(numberValue);

const boolValue: boolean = false;
console.log(boolValue);

// Type annotation inffered
const someValueTwo = "string";
console.log(someValueTwo);

// Challenge
const name: string = "shahid";
console.log(name.toUpperCase());

const number: number = 20;
const newNumber = number + 20;
console.log(newNumber);

const boolType: boolean = false;
const updatedBoolValue = !boolType;
console.log(updatedBoolValue);

// Union Type or Pipe
const tax: number | string = 10;
// tax = "shahid";
// tax.toUpperCase();
console.log(tax);

// Type literals
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "error";
console.log(requestStatus);

// type any
let notSure: any = "khan";
notSure = 20;
notSure = false;
console.log(notSure);

const books = ["1", "2", "3"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(books?.length);

let discount: number | string = 39;
discount = "shahid";
// discount = false

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "delivered";
console.log(orderStatus);

// arrays and objects
let prices: number[] = [1, 2, 3, 4];

let fruits: string[] = ["a", "b", "c"];

let randomValues: [] = ["hi"];
let emptyValues: number[] = [];

let names = ["shahid", "khan", 1];
let array: (string | number | boolean)[] = ["a", 2, true];

let temperatures: number[] = [1, 2, 3];
let colors: string[] = ["1", "3", "3"];

let mixedArray: (number | string)[] = [2, "3"];

let car = { color: "red", year: 2002 };
let cart2Inferred: { color: string; year: number } = {
  color: "yellow",
  year: 29,
};

let book: { title: string; cost: number } = { title: "bok", cost: 29 };
let pen: { title: string; cost: number } = { title: "pen", cost: 19 };
let laptop: { title: string } = { title: "laptop" };

let items: { title: string; cost?: number }[] = [book, pen, laptop];
let items2: { readonly title: string; cost?: number }[] = [book, pen, laptop];
items2[0].cost = 28;
// items2.[0].title='sweet'

let bike: { brand: string; year: number } = { brand: "Dell", year: 299 };
let laptop: { brand: string; ram: number } = { brand: "HP" };

// explicit type conversion
let product1: { name: string; price: number } = { name: "laptop", price: 29 };
let product2: { name: string } = { name: "mobile" };
let products: { name: string; price?: number }[] = [product1, product2];

// implicit type conversion
let product11 = { name: "pen", price: 11 };
let product22 = { name: "chair" };
let products33: { name: string; price?: number }[] = [product11, product22];

// Functions parameters and functions returns
function sayHi(name: string | number | boolean) {
  return console.log(`hi everyone ${name}`);
}

// any
// config
// type

sayHi("shahid");
sayHi(29);
sayHi(true);

// functions returns type
function calculateDistcount(price: number): number {
  let valiedPrice = true;
  if (valiedPrice) {
    return price - 2;
    // return "thank you";
  }
  return price * 2;
}

const result1 = calculateDistcount(10);
console.log(result1);

// function addTwo(number: number) {
function addTwo(number: any) {
  let anotherTwo: number = 2;
  return number + anotherTwo;
}

const result = addTwo(2);
const someValuesAdd = result;

someValuesAdd.myMethod();

const names: string[] = ["khan", "ahmad", "zahid"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck = "khan";

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not the list`);
}

// Default and rest parameters

function CalculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

const result2 = calculateDistcount(10, 4);

function calculateScore(
  initialScore: number,
  penaltyPoint: number = 10,
): number {
  return initialScore - penaltyPoint;
}

const result3 = calculateScore(10);

function sumRestParameters(message: string, ...numbers: number[]): string {
  const double = numbers.map((num) => num * 2);
  console.log(double);

  const total = numbers.reduce((curr, acc) => {
    return curr + acc;
  }, 0);
  return `${message} ${total}`;
}

let result4 = sumRestParameters("The total is: ", 1, 3, 4, 5);

function logMessage(message: string): void {
  console.log(message);
  // return 'hello world'
  // if your function isn't return anything then use :void otherwise left it
}

function processInput(input: string | number) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    console.log(input * 2);
  }
}

function checkEven({ id }: { id: number }): { id: number; isActive: boolean } {
  return {
    id,
    isActive: id % 2 === 0,
  };
}

const first1 = checkEven({ id: 1 });
const second2 = checkEven({ id: 2 });

// alternative
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name}`);
}

const newStudent = {
  id: 2,
  name: "shahid",
  email: "somthing@abc",
};

createStudent(newStudent);
// createStudent({id:3, name:'khan', email:'something@aaa'})

function processData(
  input: number | string,
  config: { reverse: boolean } = { reverse: false },
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData("hi"));
console.log(processData("hi", { reverse: true }));

// Type alias and intersection type

const shahid: { id: number; name: string; gradu: boolean } = {
  id: 1,
  name: "shahid",
  gradu: true,
};

const khan: { id: number; name: string; gradu: boolean } = {
  id: 2,
  name: "khan",
  gradu: false,
};

function createUser(user: { id: number; name: string; gradu: boolean }): {
  id: number;
  name: string;
  gradu: boolean;
} {
  `Hello there ${user.name.toUpperCase()} !!!`;
  return user;
}

type User = { id: number; name: string; gradu: boolean };

const ali: User = {
  id: 2,
  name: "ali",
  gradu: true,
};

const ahmad: User = {
  id: 3,
  name: "ahmad",
  gradu: false,
};

function createRandomUser(user: User): User {
  console.log(`Hello ${user.name.toUpperCase()} !!!`);
  return user;
}

type stringOrNumber = string | number;

let onlyNumberAndString: stringOrNumber;
onlyNumberAndString = "shahid";
onlyNumberAndString = 10;
// onlyNumberAndString = true

type Theme = "light" | "dark" | "systemDefault";

let theme: Theme;
theme = "dark";
theme = "systemDefault";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const zahid: Employee = { id: 1, name: "zahid", department: "sales" };
const nida: Employee = { id: 1, name: "nida", department: "HR" };

const amir: Manager = { id: 1, name: "amir", employees: [zahid, nida] };

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is an manager in the ${staff.employees.length} employees`,
    );
  } else {
    console.log(`${staff.name} is an employee in the ${staff.department}`);
  }
}

printStaffDetails(zahid);
printStaffDetails(amir);

type Laptop = { name: string; color: string; model: number };

const dell: Laptop = {
  name: "dell",
  color: "grey",
  model: 2022,
};

const hp: Laptop = {
  name: "hp",
  color: "black",
  model: 2023,
};

type PriceBook = Laptop & { price: number };

const macbookPro: PriceBook = {
  name: "mac",
  color: "white",
  model: 2011,
  price: 29000,
};

// type alias
const propName = "age";

type Animal = {
  [propName]: number;
};

const tiger: Animal = { [propName]: 10 };

// Interface

interface Book {
  readonly isbn: number;
  name: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomeValue: (someValue: number) => number;
}

const book1: Book = {
  isbn: 123,
  name: "book1",
  author: "khan",
  // genre:'genre'
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.author} ${message}`;
  },
  // option 1
  // printSomeValue: function (value) {
  //   return value;
  // },
  // option 2
  // printSomeValue: (value) => {
  //   // console.log(this);
  //   console.log(book1.author);

  //   return value;
  // },
  // option 3
  printSomeValue(value) {
    return value;
  },
  // printAuthor: () => {
  //   return book1.author;
  // },
};

// book1.isbn = 29

interface Computer {
  readonly id: number;
  brand: string;
  name: string;
  ram: number;
  storage?: number;
  // method
  upgradeRam(number: number): number;
}

const laptop2: Computer = {
  id: 122,
  name: "dell",
  brand: "dell",
  ram: 8,
  upgradeRam(value) {
    this.ram += value;
    return this.ram;
  },
};

laptop2.storage = 255;

// Advance interface (merge and textends (single interface or multiple) interfaces)
interface Person {
  name: string;
  getDetails(): string;
}

interface dogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "shahid",
  age: 29,
  getDetails() {
    return `name: ${this.name} and age: ${this.age}`;
  },
};

interface Employee1 extends Person {
  employeeId: number;
}

const employee: Employee1 = {
  name: "employee",
  age: 23,
  employeeId: 2,
  getDetails() {
    return `Name: ${this.name} and Age: ${this.age}, EmployeeId: ${this.employeeId}`;
  },
};

interface Manager1 extends Person, dogOwner {
  managePeople(): void;
}

const manager: Manager1 = {
  name: "zahid",
  age: 29,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  dogName: "zalmi",
  getDogDetails() {
    return `Name: ${this.dogName}`;
  },
  managePeople() {
    console.log("managing people...");
  },
};

manager.managePeople();
