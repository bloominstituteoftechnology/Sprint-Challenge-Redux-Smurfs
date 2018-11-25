1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    A. map, filter, and concat don't produce side-effects.  Object.assign or the spread operator can be used to extend properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    A. The store is the 'single source of truth' because it stores the global state of the entire App.  Reducers are functions that take in the current state
        and an action and return a newly updated state.  Actions are javascript objects that send data from the app to the store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    A.  App state is the global state for the entire app.  Component state is local to the component and shouldn't be used outside of the component.  If state needs    to be used globaly then use App state, if state is needed only in a certain component then use component state.

4.  What is middleware?
    A. Middleware can intercept actions before they go to reducers and can stop actions and dispatch different or multiple actions.  Middleware can also
        handle async requests.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    A. Redux thunk is middleware that handles async operations inside action creators.  It gives the ability to return functions that can access dispatch() from the    redux store.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    A. Connect.