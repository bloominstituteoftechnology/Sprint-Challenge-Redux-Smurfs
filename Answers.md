1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Three JavaScript Array/Object Methods that do not produce side-effects are .filter .map .reduce. Object.assign is able to create a new object while extending the properties of another object. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is known as the single source of truth as this is where all state resides, which is a javascript object. Actions also are objects. Actions are objects that have a type and payload. Data is sent through the store as an action. Reducers assist the application in understanding exactly how the application will react to the action. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state handles multiple components that need to share a state. Component state handles components that use the state in one place. 



1.  What is middleware?

    Redux extension that creates asynchronus behavior.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk looks at each action that passes and calls functions shall it be one. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect()
