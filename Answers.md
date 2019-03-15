1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? 
spread operator arrays [...arrayToSpread]
spread operator objects {...objectToSpread}
Object.assign

Which method do we use to create a new object while extending the properties of another object?
spread operator

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where state is held.  Instead of passing props, components can access the store via connect.  It is the 'single source of truth' because of this.

Actions are objects with a type and a payload that are triggered by action creators and sent to the reducer. The action type determines what case the reducer will execute.

Reducers receive actions and use a 'switch' method to execute the correct (immutable) alteration to the store.  


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the store.  Component state is state that lives in the constructor of a class component.  Application state is useful for managing the overall data structure, while component state is useful for things like change handlers that are strictly tied to the component.

1.  What is middleware?
Middleware lies between the actions and the reducers and adds some functionality.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk changes the return from action-creators to be a function instead of an object.  This allows you to write asynchronous actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect
