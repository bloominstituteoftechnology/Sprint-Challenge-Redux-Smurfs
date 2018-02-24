## Question 1

### Name 3 Javascript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`Filter`, `map` and `slice`.  Can use either `Object.assign()` or the spread operator `...` i prefer the latter.

-----------------

## Question 2

### Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as the 'single source of truth' in a redux application?

`Actions` are called like functions and send packets of informationt to the reducers telling them what to do.  `Reducers` follow what orders are given by the action and does what is necessary with the `store` (without mutating) and are the only part permitted to do so. The `store` is an overarching immutable state object for the application and any component can gain access to it as long as it asks regardless of structure or what its parents are.

----------------

## Question 3

### What is the difference between Application state and Component state?  When would be a good time to use one over the other?

Application state is available everywhere and facilitates communication between different components, while component state is held only by that component.  Application state is good for anything multiple components need constant access to and component state is good for temporary things that only need to be passed to one child, if that.

------------

## Question 4

### What is middleware?

Software that facilitates easier interaction between two disparate things,  in this case the front-end app and an api.

---------

## Question 5

### Describe `redux-thunk`, what does it allow us to do?  How does it change our `action-creators`?

It's a middleware that allows us to return functions that get called (by the middleware) in our action creators, allowing us to do asynchronous calls to apis in the action without violating any patterns while keeping the reducers pure.

--------

## Question 6

### Which `react-redux` method links up our `components` with our `redux-store`?

Connect, mapStateToProps, mapDispatchToProps