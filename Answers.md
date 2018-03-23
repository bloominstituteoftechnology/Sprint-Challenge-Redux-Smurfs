1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
I'm not sure I can "name" them? But Pure functions do not produce side effects, by mapping the data into a new Array/Object.
Object.Assign?



2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action is a JS object that has type(required) and payload(not required) properties, as well as any other needed properties. 

Reducers are functions that manage app state.

The store is known as the 'single source of truth' because it holds the entire state tree of the app, and you can only change it by dispatching actions.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Store holds global application state, whereas component state is loca, meaning that it can only be udated inside of the component, then pass down via props.


4.  What is middleware? 

Middleware is software that connects and helps two programs communicate.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is middle ware for redux that allows you create action creators that return a function, rather than an action, that receives the store methods dispatch and getState as params.

6.  Which `react-redux` method links up our `components` with our `redux store`?
