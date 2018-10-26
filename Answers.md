1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Object.keys , array.forEach , Object.assign or {...}

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are functions that dispatch a type and an optional payload to our reducers and based on the action our reducer will know how to update the state. Reducers are in charge of creating a new version of state depending on what actions were fired. The store is where our applications state is held.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state would be global and live in the store while Component state would live on a single components state. Component state may be useful for something very specific to a component while application stte should be used when multiple components might need to accees the same properties on state

4.  What is middleware?
  Middleware intercepts our actions and does stuff depending on how we set up our Middleware, usually handle async calls with thunk.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux thunk allows us to make async calls to servers, it stops action creators before they get to the reducers

6.  Which `react-redux` method links up our `components` with our `redux store`?
connect