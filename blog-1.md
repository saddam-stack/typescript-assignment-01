Title: The Four Main Parts of OOP in TypeScript: Make Handling Code Easier:

Introduction: Object Oriented Programming or OOP is a way to write code using real life objects as examples . On TypeScript projects with a lot of code, it can get really confusing. This is where the four main parts of OOP come in: Inheritance, Polymorphism, Abstraction and Encapsulation They make code less complicated and easier to fix.

-->Inheritance (Code Reuse)
Inheritance allows a class to acquire properties and methods from another class. This also helps you to avoid writing the code again and again and follows the rule of not repeating yourself.

Code Example:

class Person {
    constructor(public name: string, public age: number) {}
}

class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
        super(name, age);
    }
}

--> Polymorphism (Versatility)
Polymorphism is when a method takes on many forms. For example, the same method names may be used in different classes but with different implementations.

--> Abstraction (Simplicity) 
Abstraction hides complex internal implementation and only exposes the required features to the user. In Typescript we use abstract classes or interfaces to define what should be done, without defining how it’s done.

--. Encapsulation (Security) 
Encapsulation is the packaging of data and methods into a single unit (class) and restricting access to some of the components using access modifiers like private or protected. This keeps the data safe.

Conclusion :With these four pillars in place, TypeScript developers can build scalable, reusable and secure applications. If you want to learn to write software for enterprises, these are important things to know.



