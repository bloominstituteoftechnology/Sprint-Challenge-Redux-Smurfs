1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
        Array.map(), Array.filter(), and Array.concat() when used properly produce no side-effects. Object.assign() is a method used for creating a new objects and extending properties of another.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        `Actions` are contained in action creators, which outline the changes of state in our components. `Reducers` hold the initial state of our components and used passed in action.types to transition between states in our components. All of our reducers are combined and contained in the `store`.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
        Application state is immutable, reducers clone and replace objects without having to update the state of a component's original object. 
1.  What is middleware?
        Middleware intercepts an action. From there it will send the action untouched to the reducer, or dispatch a single action or multiple new actions to a reducer
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        Redux-Thunk asynchronously gives our action-creators the ability to return functions that can use the dispatch() method.
1.  Which `react-redux` method links up our `components` with our `redux store`?
        The createStore function is used to connect our component with the `redux-store` that contains all of the components state changes. The dispatch() method is how Redux knows when a components state has changed in the store.
