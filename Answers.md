1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign, filter, map.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are objects that our reducers takes in and based on them they perform some functions and manipulate our store, so our store is our aplication global state.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Aplication state is the global state or store that redux provide to us, component level state is when we have a class component and we declare a state in it. In larger aplications we might prefer use aplication state over component state, this allows us pass data to our component directly instead of being passing props down lots of layers deep.
1.  What is middleware?
is a function that intercepts our actions before they get to our reducers, and manipulate them in some way, so we can have extra functionalities.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
it allows us to return a function instead of an object in our action creators, allowing use to handle async data in our apps.
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect.
