1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .filter(), and .reduce() are 3 JavaScript Array/Object Methods that, when used properly, do not produce side-effects. This is because they return a new array rather than manipulating the original array. While the spread operator can be used when creating a new object that extends the properties of another object, Object.assign() is the method more commonly used for this purpose.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is an object that holds the app's global state. It is known as the single source of truth because it it is consistent, regardless of which component is viewing the state tree.

Actions are objects or functions that return objects that have an action type and payload of associated data.

Reducers are pure functions that return new objects to update state in response to actions they receive.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is held in the store. It is used for data that is needed in multiple components. Component state is data that is held in a particular component. It is used when that info/data is only needed in one component(e.g. form input).


1.  What is middleware?

Middleware is intermediary code (either third party or self-written) between actions and reducers that add functionality to Redux.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a piece of middleware that allows developers to handle asychronous operations inside action creators. It allows us to dispatch multiple actions (or none) from a single action creator.


1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()() is the redux method used to connect components to the store.
