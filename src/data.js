const dict = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false
};

const programmingQuestions = [
  "Class Components have a built-in object called what?", //
  "What do you store in the state object?", //
  "What happens to make the component re-render?", //
  "If your component has a constructor, what needs to be passed to it?", //
  "What happens if super(props) isn't called?", //
  // "How many properties can your state object have?", //
  // "What happens when a value in the state object changes?", //
  // "What method do you use to update the state object?", //
  // "What syntax allows us to access to a value in state?", //
  // "What does onClick do?", //
  // "What kind of function do we use when defining our custom methods?", // 
  // "What is this particular syntax called: \n const element = <h1>Hello, world!</h1>;", //
  // "What is JSX?", //
  // "What does React use to render JSX to the DOM?", //
  // "In order to write HTML on multiple lines, what syntax do we need to put the HTML inside of?", //
  // "What is a top level element?", //
  // "What attribute can we use in JSX to assign a CSS class selector?", //
  // "With JSX you have to write JavaScript expressions inside of what syntax?", //
  // "What does the import statement do?", //
  // "How does React know you are creating a React component?", //
  // "What is <Header />, <Main /> and <Footer />?", //
  // "Why must a user-defined component be capitalized?", //
  // "What is a fragment?", //
  // "What does the keyword `class` tell us about a Component?", //
  // "What does the keyword `extends` do?", //
  // "What data type is React.Component?", //
  // "When do you not need to implement a constructor method?", //
  // "What does `super(props)` do?", //
  // "What do we know about the state object?", //
  // "What does `render()` do?", //
  // "What does `export default` do?", //
  // "What is an ES6 class?", //
  // "What is an object in JavaScript?", //
  // "How do we identify an object?", //
  // "What is the data inside the object called?", //
  // "How did we create objects in 201?", //
  // "Explain the difference between a parameter and an argument.", //
  // "What is special about a class's name?", //
  // "What does the constructor method do?", //
  // "What keyword will allow a constructor to call the constructor of a super class?", //
  // "What keyword creates a new instance of a class?", //
  // "What is object oriented programming?", //
  // "What is ES6?", //
  // "When was ES6 released?", //
  // "List at least 5 new features of ES6.", //
  // "What are the new type of functions called that we will be using in 301?", //
  // "What do the keywords let and const do?", //
  // "What is React?", //
  // "What is a component?", //
  // "Tell me about the data flow in React.", //
  // "What does 'component state' mean in React?", //
  // "React is a User Interface ______________.", //
  // "How do we make a React element a DOM element?", //
  // "Can we control which components receive data flow?", //
  // "Every component manages its own ____________.", //
  // "How can we pass data back up to a parent component?", //
  // "Do all classes need a constructor method?", //
  // "What is a method?", //
  // "How do you access the properties inside an object?", //
  // "Name at least one benefit to using arrow functions.", //
  // "What version of JavaScript were arrow functions introduced in?", //
  // "Do we need the keyword function in an arrow function?", //
  // "What characters let JavaScript know that we are defining an arrow function?", //
  // "When is the only time we can remove the parentheses from around a parameter, in an arrow function?", //
  // "In what situation can you use an implicit return?", //
  // "Do you need to use a code block if the arrow function can be implicitly returned?", //
  // "If our arrow function takes no arguments, do we still need the parenthesis around our parameters?", //
  // "What makes an arrow function anonymous?" //
];

const programmingAnswers = [
  "React Class components have a built-in state object.",
  "The state object is where you store property values that belong to that particular component.",
  "When the state object changes or updates, the component re-renders.",
  "If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.",
  // "In JavaScript, super() refers to the parent class constructor. JavaScript enforces that if you want to use contexual 'this' in a constructor, you have to call super first. You won’t be able to use 'this' in a constructor until after you’ve called the parent constructor.",
  // "The state object can contain as many properties as you like",
  // "When a value in the state object changes, the component will re-render, meaning that the browser output will change according to the new value(s).",
  // "To change a value in the state object, always use the this.setState() method. It will ensure that the component knows it has been updated and calls the render() method.",
  // "Refer to the state object anywhere in the component by using the this.state.propertyname syntax",
  // "The onclick event occurs when the user clicks on an element. A button with an onClick event can update our state properties.",
  // "ES6 Arrow Function",
  // "JSX",
  // "JSX stands for JavaScript XML. JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.",
  // "With React, we can render JSX directly to the HTML DOM using React's rendering API known as ReactDOM.",
  // "To write HTML on multiple lines, put the HTML inside parentheses",
  // "The HTML code must be wrapped in ONE top level element(parent element), like a fragment.",
  // "The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX. JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.",
  // "With JSX you can write javascript expressions inside curly braces. The expression can be a React variable, or property, or any other valid JavaScript expression.",
  // "The static import statement is used to import read only live bindings which are exported by another module.",
  // "To define a React component class, you need to extend React.Component",
  // "They are custom React Components.",
  // "Capitalized types indicate that the JSX tag is referring to a React component. If the component name is not capitalized, React will think it is an HTML tag instead",
  // "Fragments let you group a list of children without adding extra nodes to the DOM.",
  // "A React Class Component is just an ES6 Class under the hood.",
  // "The extends keyword is used to create a class that is a child of another class. The extends keyword can be used to subclass custom classes in React. This is where our custom class component receives is abilities to act like a React Component.",
  // "It is an ES6 class inside the React library.",
  // "If you don’t initialize state, you don’t need to implement a constructor for your React component.",
  // "In JavaScript, super refers to the parent class constructor or in the case of a React Class Component, it refers to React.Component. The super keyword is used to access and call functions on an object's parent. When implementing the constructor for a React.Component subclass, you have to call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which will prevent you from using the state object.",
  // "React Class components have a built-in state object. The state object is where you store property values that belong to the component. When the state object changes, the component re-renders.",
  // "The render() method is the only required method in a class component. When called, it should examine this.props and this.state and can return React elements, arrays, strings, numbers, booleans or null.",
  // "The export statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the import statement.",
  // "A class is a template for creating objects.",
  // "An object is one of JavaScript's data types. It is used to store various keyed collections and more complex entities.",
  // "You can idenitfy an object by it's snytax. Curly Brackets, Key/Value Pairs seperated by colons and properties seperated by commas.",
  // "Properties are the data inside an object.",
  // "In 201, we used constructor functions to create objects or an object literal.",
  // "A parameter can be found in the function definition whereas the argument is the actual value that gets passed to the function call at runtime to fulfill the parameter.",
  // "We name them with a capitalized letter.",
  // "The constructor method is a special method for creating and initializing an object created with a class. The constructor keyword allows us to define the constructor with parameters the same way we would do it with a regular function.",
  // "A constructor can use the super keyword to call the constructor of the super class.",
  // "The new keyword lets developers create an instance of a user-defined object or of one of the built-in object types that has a constructor function.",
  // "Object-oriented programming, also known as OOP, is a computer programming model that organizes software design around data, or objects, rather than functions and logic.",
  // "ECMAScript 2015 is also known as ES6 and ECMAScript 6. ECMAScript 2015 was the second major revision to JavaScript.",
  // "2015",
  // "let, const, arrow functions, classes, promises, and lots of new string methods and array methods.",
  // "ES6 Arrow Functions.",
  // "They are a new/different way to declare variables in ES6.",
  // "A user interface library",
  // "A small piece of code that fills a certain part of the interface that you're building in React",
  // "It only flows one-way, down to the children components.",
  // "To manage state data or changes happening in our application but are controlled at a component level so a single part of the user interface would have state that can be shared with other components.",
  // "library",
  // "By passing the React Component through ReactDOM to render it to the page.",
  // "Yes, if a component doesn't need that particular data to function, we don't have to pass the data down to it.",
  // "state",
  // "By calling a function in a higher component",
  // "No",
  // "A method is simply a function that is bound to a property on an object.",
  // "Using dot notation.",
  // "They have a concise syntax, they have implicit returns, they don't rebind the value of contexual this when you use a arrow function inside of another function.",
  // "ES6",
  // "Nope.",
  // "=>",
  // "When there is only one parameter.",
  // "In a one-liner arrow function who's only purpose is to return something and you don't need the keyword return.",
  // "Nope, you can fit it on one line.",
  // "Yes",
  // "Arrow functions cannot be named but can be assigned to a variable."
];

// ===========================================================

// const questions = [
//   "What is Question 1", //
//   "What is Question 2", //
//   "What is Question 3", //
//   "What is Question 4", //
//   "What is Question 5", //
//   "What is Question 6", //
//   "What is Question 7", //
//   "What is Question 8", //
//   "What is Question 9", //
//   "What is Question 10", //
// ];

// const answers = [
//   "What is Answer 1", //
//   "What is Answer 2", //
//   "What is Answer 3", //
//   "What is Answer 4", //
//   "What is Answer 5", //
//   "What is Answer 6", //
//   "What is Answer 7", //
//   "What is Answer 8", //
//   "What is Answer 9", //
//   "What is Answer 10", //
// ];

export {
  dict,
  programmingQuestions,
  programmingAnswers,
};
