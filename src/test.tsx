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
