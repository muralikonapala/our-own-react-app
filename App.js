

const h1 = React.createElement('h1', {id: 'headding'}, 'Hello World from React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1);




// const heading = React.createElement(
//   "h1",
//   { id: "name" },
//   "Hello World from React!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
  
// root.render(heading);

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am a h1 element")
//     //if it has a multiple children then we can pass it as an array
//     // [
//     //   React.createElement("h1", {}, "I am a h1 element"),
//     //   React.createElement("h2", {}, "I am a h2 element")
//     // ]
//   )
// );
// const jsxHeading = <h1>Namaste React in JSX</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);


// const Heading = function HeadingComponent() {
//   return <h1>Namaste React Functional Component</h1>
// };

//arrow function


// React Element
// const title = (
//   <h1>Functional Component</h1>
// );

// const Title = () => (
//   <h1>Functional Component</h1>
// );

// const HeadingComponent = () => (
//   // calling react element in {}
//   <div id="container">
//     {Title()}
//     <Title />
//     <Title></Title>
//     <h2>Heading Component</h2>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <HeadingComponent />
// );