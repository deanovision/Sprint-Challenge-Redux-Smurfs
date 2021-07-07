1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map,
Array.filter,
Object.assign()
-this is used to create a new object extending the properties of another object

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - triggered by events in the UI and dispatches to the reducer an object which can may contain up to two properties. A type must be included and a payload is optional. This object is passed to the reducer as an argument

reducers - receive actions as arguments and return a new state tree based on the action type

store - where state is held takes in a reducer which returns a new state tree for every action.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is held in the store object and component state is held on the individual component. a good place to use component state is on form pages that take user input, once the form is submitted then the component state can be added into the application state and then reset.

1.  What is middleware?

is a function that intercepts data and returns the data either alter or unaltered it may even stop the data flow entirely based upon the purpose of the middleware

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk is a middleware that allows you to run async actions it changes your action creators to functions that return functions and you need to explicitly dispatch objects to the reducer

1.  Which `react-redux` method links up our `components` with our `redux store`?

the {connect} function
