**Outline of the Technology Stack**

**Languages**

**HTML - Hypertext Markup Language**

HTML is Markup language that defines the layout and structure of the web content. It is used in combination with CSS to generate a visually appealing UI (1).

**CSS - Cascading Style Sheets**

CSS is a rule based language that is used to specify how HTML should be styled (e.g. fonts, colors, layout). It is used to help maintain a consistent/uniform visual appearance across all of the web pages. A CSS file contains a set of rules that specifies what styles should be applied to specific elements or groups of elements on the web page (1, 2).

**XML - eXtensible Markup Language**

XML is a markup language similar to HTML, it is used to store and transport data. It is similar to HTML but more general in that users can make custom tags. It is commonly used for storing data in web services (8). <https://www.geeksforgeeks.org/html-vs-xml/> has a helpful table with specific differences between HTML and XML.

**JavaScript and JSX**

JavaScript is a scripting language, designed to interact and communicate with other programming languages. It is an interpreted programming language with just-in-time compiling. JavaScript that enables dynamic behavior such as modifying html to update a user interface based on user interaction (1). JSX is JavaScript XML, which is a syntax extension of JavaScript (5).

**TypeScript and TSX**

Typescript is a “syntactic superset” of JavaScript which means that it adds additional syntax to JavaScript. The additional syntax adds static typing, which can be better for organization, provides type safety, and provides additional features such as interfaces, abstract classes, function overloading, etc. (7) TSX is TypeScript XML, which is a syntax extension of Typescript (5).

**Turtle - Terse RDF Triple Language**

Turtle is a syntax / file format for data in the Resource Description Framework (RDF) model (9). It is used to describe the structure of the web ontology, it is an OWL syntax (Web Ontology Language) (10).

**Frameworks**

**Node.js**

Node is a JavaScript runtime environment that allows for the creation of both front end and back end code in JavaScript. It is open source and cross-platform which means that the source code is available and it should work on Windows, Linux, or Mac. Node executes the JavaScript code and has support for modules that offer additional functionality (3).

**React**

React is a JavaScript library for building user interfaces that uses the render() method to take input and display output (4). JSX (JavaScript XML) is a syntax extension of JavaScript allows developers to write HTML style syntax in their javascript code and use the render() method to display the output of that HTML. In this project we are using TSX which combines JSX syntax with TypeScript’s type system (5). The benefit of using TSX is that it adds static typing, which allows developers to specify types and throw errors when types don’t match (6).

**RDF - Resource Description Framework**

RDF is a standard designed as a data model for metadata. For this project we are using Turtle as the syntax notation for the RDF. The RDF is a directed graph of triple statements with subject, predicate, object (11).

**Database**

**Solid Pod**

Solid is a specification (set of technical criteria / requirements) for storing data in secure decentralized Pods, which are like personal servers (12,13). There are many different Solid Servers which host the Pods or users can host their own Pods (14). For this project we are using Inrupt as the Pod Provider.

**Sources**

1. <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript>
2. [What is CSS? - Learn web development | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)
3. <https://www.freecodecamp.org/news/what-is-node-js/>
4. <https://legacy.reactjs.org/>
5. <https://abhishekdhapare.hashnode.dev/jsx-vs-tsx-choosing-the-right-syntax-for-your-react-app>
6. <https://www.w3schools.com/typescript/typescript_intro.php>
7. <https://www.contentful.com/blog/what-is-typescript-and-why-should-you-use-it/>
8. <https://www.geeksforgeeks.org/html-vs-xml/>
9. [https://en.wikipedia.org/wiki/Turtle_(syntax)](https://en.wikipedia.org/wiki/Turtle_%28syntax%29)
10. <https://www.oxfordsemantic.tech/faqs/what-is-an-ontology>
11. <https://en.wikipedia.org/wiki/Resource_Description_Framework>
12. <https://solidproject.org/about>
13. [https://en.wikipedia.org/wiki/Specification_(technical_standard)](https://en.wikipedia.org/wiki/Specification_%28technical_standard%29)
14. <https://solidproject.org/users/get-a-pod>