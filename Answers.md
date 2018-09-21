1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  a. Array.filter, Array.map both return a new array without side effects. Map returns the same number of elements while filter will exlcude whatever meets the passed in condition.
  b. Array.reduce will return something new which could potentially be an array (or any data-type, really).
  c. Object.assign is a method found on the Object prototype. Its first object is the object you want to copy data into, the second is what object you want to copy, and arguments thereafter are editable on the second object or new objects to be appended to the first object. 
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  a. Actions are simply functions that passes a javascript object (which contains a type and payload) to the reducer. The reducer holds some initial state and takes in an action as well, it will pass the action.type property through each case in the switch statement and perform some logic on the existing state with the passed in action.payload. This data is sent to the state of the app and updates it where needed. The store is the single source of truth because it simply a single javascript object that contains all the state of the app in which any component can connect to and get data from.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  a. Application state is global state meaning it can be accessed from anywhere with relative ease, and is typically living inside some 3rd party library such as Redux. Component state is local state to a component, it can interact with other components, but the implemnetation of such a feat can be extremely difficult and may resort in the programmer making some mistakes.
4.  What is middleware?
  a. Middleware is a way to connect either different parts of an application. There are other uses beyond just one application, but for our purposes, that is what middleware is for. We have been using middleware to connect React to Redux in the same application.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  a. Thunk allows us to write action creators that return functions instead of actions. Thunk can also be used to delay the "dispatch" of an action, thus allowing for asynchronous calls in Redux which will allow things like API calls.
6.  Which `react-redux` method links up our `components` with our `redux store`?
  a. connect.
