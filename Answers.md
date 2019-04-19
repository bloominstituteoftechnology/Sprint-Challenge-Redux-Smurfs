1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
3 method - Array.map, Array.filter, Array.reduce, Array.slice, Object.assign, Array.concat;
we create a new object with Object.assign (but also - spread operator. )

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are sent to say that something might need to update, and they have information about that update. reducers take actions and provide a new version of state based on what the action brought them. That state is saved in the store. The store is the single source of truth, because it's the one place that should contain all significant information about the state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the state of the app in general, and would be held in the store when using redux. it is the same across all components. component state lives on the component itself, and can't be accessed outside of it.

you'd use component state for information that is only useful/needed in that component, and application state for anything that needs to be available to multiple components or needs to live beyond a given component.

1.  What is middleware?

functions that allow actions to be dispatched, read, and changed if needed before they make it to the store.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is middleware that lets dispatch process functions that create actions and call dispatch. (instead of just processing actions)

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect, mapStateToProps. 
