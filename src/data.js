export const dict = {
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

export const questions = [
  "Class Components have a built-in object called what?", //
  "What do you store in the state object?", //
  "What happens to make the component re-render?", //
  "If your component has a constructor, what needs to be passed to it?", //
  "What happens if super(props) isn't called?", //
  "How many properties can your state object have?", //
  "What happens when a value in the state object changes?", //
  "What method do you use to update the state object?", //
  "What syntax allows us to access to a value in state?", //
  "What does onClick do?", //
  "What kind of function do we use when defining our custom methods?" // 
];

export const answers = [
  "React Class components have a built-in state object.",
  "The state object is where you store property values that belong to that particular component.",
  "When the state object changes or updates, the component re-renders.",
  "If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.",
  "In JavaScript, super() refers to the parent class constructor. JavaScript enforces that if you want to use contexual 'this' in a constructor, you have to call super first. You won’t be able to use 'this' in a constructor until after you’ve called the parent constructor.",
  "The state object can contain as many properties as you like",
  "When a value in the state object changes, the component will re-render, meaning that the browser output will change according to the new value(s).",
  "To change a value in the state object, always use the this.setState() method. It will ensure that the component knows it has been updated and calls the render() method.",
  "Refer to the state object anywhere in the component by using the this.state.propertyname syntax",
  "The onclick event occurs when the user clicks on an element. A button with an onClick event can update our state properties.",
  "ES6 Arrow Function"
];