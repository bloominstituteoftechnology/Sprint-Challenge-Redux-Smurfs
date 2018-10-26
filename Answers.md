1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Spread operator ...
Object.assign
Array methods like map filter reduce.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are dispatched to the reducer and it determines what objects to return derived from the initial state of the store.
Store contains a initial state later on reproduced in a immutable way and thrown into the component with the connect api.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state can be used to store data within the component.
Application state can be better if you want several components talking to each other and with redux
you can have hot reloading and a singlesource of truth.

1.  What is middleware?

It is a function that catches the dispatched action before it goes to the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware that waits for the dispatch method to return with a payload then sent to the reducer.
Therefore allowing us to make asynchronus functions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

The Connect Api functions.
