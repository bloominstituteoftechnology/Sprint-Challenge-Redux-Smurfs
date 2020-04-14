1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Three JavaScript Array/Object methods that do no produce side-effects are `.map`, `.filter`, `.concat`. We use the method `.assign` to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    `Actions`: payloads of information that sends data from the application to the data store.
    `Reducers`: specify how the application's state will change when responding to an action and then updates the state.
    `Store`: holds the state of the application. It cannot be changed with a dispatched action.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    `Application State` is immutable. Changes made are not made on the state object, but instead on a clone of it. 
    `Component State` is managed within the component and is not immutable.
    If you want to build a scalable application that doesn't used man state-full components, then it is best to use `Application State`.

4.  What is middleware?
    Middleware is an extension point between an action and a reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `Redux-Thunk` is a node package that allows action creators to return functions using `dispatch()`.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    The `dispatch()` method links up components with redux-store.
