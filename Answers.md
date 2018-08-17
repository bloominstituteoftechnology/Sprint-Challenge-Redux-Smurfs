<!-- Questions -->

1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? 
  Which method do we use to create a new object while extending the properties of another object?
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 
  Why is the store known as a 'single source of truth' in a redux application?
3.  What is the difference between Application state and Component state? 
  When would be a good time to use one over the other?
4.  What is middleware?
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
6.  Which `react-redux` method links up our `components` with our `redux store`?

<!-- Answers -->

1. `Object.assign`, `.filter`, `.reduce`, `.map`; We use `Object.assign`.
2. Actions control the specific triggers for components and line up details for use by a reducers.
  Reducers use the details from actions to actually set our store.
  Our store is our overarching state and holds all of our data from our reducers.
  It can be accessed from anywhere.
3. Our store is our application state in redux. It's useful for when we have a lot of state to work with, 
  or even just for when we'd have to be passing state around a lot more than desirable.
  Component state is the typical state that we worked with initially; 
  it's held on our components (or even a singular component), and is useful for small-scale state,
  or nearly local state (to that component).
4. Middleware, in redux, simply allows up to do things in between our action and reducer.
  What we've used it for is for (async.) API requests and logging.
5. Redux-thunk allows for our async. action dispatching. Our action creators wouldn't be capable without it.
6. `connect` from the react-redux library links up components with (specified parts of) the store.
