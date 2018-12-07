1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

> Object, .map(), filter(), ...

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

> Actions are object that include a payload and type, describing a change to the state. 
> reducers are the logic needed to execute nd action
> a store is where reducers and state are held and passed from/accessed

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

> Application state is the specific data/functions needed by the entire project. Component state is the specific actions/functions needed locally by a component. Use the former for everything except when you do not care about the state, and dont care if its lost, then use the later. 

1.  What is middleware?

> software that is injected into the redux flow to, for instance, allow for async calls.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

> A think is a function returned by a function. Redux-thunk allows us to use middleware.

1.  Which `react-redux` method links up our `components` with our `redux store`?

> connect() https://www.youtube.com/watch?v=cWQMSHMhnwQ