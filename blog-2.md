Title: Making Code Cleaner with Pick and Omit

Introduction: TypeScript lets us define what our data should look like with Interfaces. But you don’t always need every property from a big interface, right? That’s where Pick and Omit come in handy. They help you grab just the pieces you need—or skip the ones you don’t—without rewriting everything.

--> What is Pick?
Pick is pretty straightforward. It lets you select only the properties you want from an interface.

Let’s say you have a User interface with several details, but you’re just interested in the name:

interface User {
  id: number;
  name: string;
  email: string;
}
type OnlyName = Pick<User, "name">;

--> What is Omit?
Omit does the opposite. Instead of picking what you want, you tell TypeScript which properties to leave out.

For example, if you want all the User details except the id:
type NoID = Omit<User, "id">;

--> Why use them? (DRY)
Pick and Omit help you avoid repeating yourself. Instead of creating a bunch of new interfaces for different situations, you build everything off your main interface and just pick or leave out what you need. That means less code to update if things change and fewer mistakes to worry about.

Conclusion: Pick and Omit are simple tools that make your TypeScript code tidier and easier to manage. They help you write cleaner, more professional projects without the fuss.