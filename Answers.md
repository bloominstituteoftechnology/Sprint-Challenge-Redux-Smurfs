1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.forEach
.concat

Object.assign(target, source(s)) - create new object while extending properties of another


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - Called by action creators to pass information (such as action.type and input arguments) to reducers.

reducers - Pure functions that return new state objects to the store.

store - Centralized state location with special redux properties. Known as a single source of truth because it contains the values of all state objects that are passed to it and distributes it to the props of each component.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the state of the entire application, whereas Component state is the local state on the component. When local state needs to be very volatile - such as unSubmitted form inputs - component state would be more appropriate. When a change of state is possibly going to have effects beyond the local component, its state should be stored in the application.


4.  What is middleware?
Middleware is a third-party intervention between an action and reducer that occurs when the action is dispatched. It can be used for logging, talking to an async API, routing, etc.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a piece of middleware that allows you to write action creators that return a function instead of an action, so that you can perform asyncronous actions to talk to an api.

6.  Which `react-redux` method links up our `components` with our `redux store`?

{ connect }