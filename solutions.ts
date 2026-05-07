//problem 1

const filterEvenNumbers = (input : number[]) : number[] =>{
    return input.filter(num=> num % 2 ===0);
}
//console.log(filterEvenNumbers([1,2,3,4,5,6]));


//problem 2

const reverseString = (input : string ) :string =>{
    return (input.split('').reverse().join(''));
}
//console.log(reverseString("typescript"));


//problem 3

type StringOrNumber = string | number ;
const checkType = (input: StringOrNumber) :string  =>{
    if (typeof input ==="string"){
        return "String";
    }
    else{
        return"Number";
    }
}
//console.log(checkType("Hello")); // Sample Output 1:
//console.log(checkType(42)); // Sample Output 2


//problem 4

function getProperty<T, K extends keyof T> (obj:T, key: K){
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
const userName = getProperty(user, "name");
//console.log(userName);


//problem 5

type Book = {
    title:string,
    author:string,
    publishedYear:number
}
function toggleReadStatus (book: Book){
    return{
        ...book,
        isRead:true
    }
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const output = toggleReadStatus(myBook);
//console.log(output);


//problem 6
class Person {
    name: string;
    age: number;

    constructor (name:string, age:number){
        this.name= name;
        this.age=age;
    }
}
class Student extends Person{
    grade: string;

    constructor (name:string, age:number, grade:string ){
        super(name,age);
        this.grade= grade;
    }
    getDetails() :string {
        return(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade} `);
    }
}
const student = new Student("Alice", 20, "A");
//console.log(student.getDetails());

//problem 7

function getIntersection(list1: number[], list2:number[]) :number[] {
    return list1.filter((num) =>{
    return list2.includes(num);
    })
} 
const result = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
//console.log(result);