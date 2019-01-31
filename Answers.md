1.  Name 5 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Many of the JavaScript Array/Object Methods that do not produce side-effects include: 

    I. Array.map() 
    II. Array.filter()
    III. Array.reduce()
    IV. Array.concat()
    V. Object.assign() - is used to create a new object while extending the properties of another object. 
    

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Redux actions are functions that return an object with an action type and an action payload property. The only way to modify application 
    state when using Redux is by dispatching actions. We can use action creators and the react-redux library in order to dispatch those actions. 

    Redux reducers manipulate the application's state by caculating the new version of the state based on the current state and a given action. 
    
    A Redux store is an object that contains the state of the whole application. 
    
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is data the whole application is concerned about. Component state is data a single component is concerned about. 

4. What is middleware?

    Middleware is an extension of Redux that adds new functionality to it. Middleware can stop actions, forward an action untouched, dispatch a different action, and dispatch multiple actions. 

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux thunk provides the ability to handle asynchronous operations inside our action creators by using the store.dispatch method to accept an action and send it off to all the reducers with unique arguments for the action payload. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

    The react-redux connect method links up our components with our redux-store. 
