1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Array.filter(), Array.map(), Array.concat() Object.create() creates a new object, using an existing object as the prototype. 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    store: a global state container
    reducers: controls the change of our state(s)
    actions: info that sends data between your component(s) & store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    One is global, the other is specific to the component. Global state is useful for larger applications.

4.  What is middleware?
    middleware provides a way to interact with actions that have been dispatched to the store before they reach it.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk is a middleware that allows us to handle aynchronous operations. It does this by making the action creators return a function
    which can dispatch the actions at a later time as opposed to the actions-objects that are normally returned by the creators.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    That would be the connect method. 