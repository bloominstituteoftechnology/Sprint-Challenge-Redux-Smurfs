1a. Name 3 JavaScript Array/Object Methods that do not produce side-effects?
A. map, filter, concat

1b. Which method do we use to create a new object while extending the properties of another object?
A. Object.assign

2a. Describe `actions`, `reducers` and the `store` and their role in Redux.
2b. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Aab.
    Actions: An object that describes an event that has occurred in the UI.
    Reducers: Keeps track of state; makes copies, edits those copies, then silently replaces state with those copies.
    Store: All-knowing holder of all application knowledge; it is consistant and uneditable regardless who or what is sneaking a peak at it.


4a. What is the difference between Application state and Component state?
A. Application state is controlled by the store; component state is the state on individual components.
4b. When would be a good time to use one over the other?
A.  Application state is used when multiple components are reading and action on the same data. Component state is used when only one component needs the data.

5.  What is middleware?
A.  Functions that modify actions before they reach the reducers.

6.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A.  Enables asynchronous actions to occur before they're allowed passage to the synchronous reducers. It gives action creators access to the dispatch and the ability to return functions.

6.  Which `react-redux` method links up our `components` with our `redux store`?
A.  Connect 4