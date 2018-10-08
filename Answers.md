1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?
    Which method do we use to create a new object while extending the properties of another object?
    .map, .filter, and .reduce all copy an array and manipulate it to create a new one.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions are used as simply that, an action. They provide the reducer with options that are carried out depending on the action.type and carry out a payload. The 'store' is considered the single source of truth because it holds a state where all the data lies.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state can be accessed globally meanwhile a component state is located in a component with passed down properties.

1)  What is middleware?
    Middleware acts as a buffer before the reducer is reached and after actions. It is used to log passing information and provides async functionalities.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is a middleware that allows us to return a function instead of an action.

1)  Which `react-redux` method links up our `components` with our `redux store`?
    The connect method is what's used to link components and store.
