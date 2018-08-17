1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Since Arrays and Objects are reference types, they can easily be mutated. Unfortunately mutation is considered to be a side effect, especially when using state  and store in React and Redux. Array methods such as map, filter, and reduce create a copy of the array before changing any data within the array. This leaves the original array unchanged. For objects, the ```Object.assign``` method allows a copy of the object to be created which extends all the  properties of the original object. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is a Javascript object, where all state in the application lives. That is why it is called the single source of truth. Actions are data that are sent to the store. Actions are objects that have a type and payload. Action creators are function that simply return the action object. When the actions are dispatched to the store, the reducer is called to specify how the application should react to the specific action triggered. Depending on the action, the state is changed. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

If multiple components need to share a state, then that state should live in the store. For example, when making an API call and returning the data, it is best for that data to live in the Redux store, because that data will be used in multiple places in the application. If a state is used only in one place, then it is better put inside Component state. A good example of Component state is an input field that changes depending on user. 

1.  What is middleware?

Middleware is an extension to Redux. It intercepts the action before it reaches the reducer, and performs some sort of action. It can stop an action, or even dispatch multiple actions. Since Redux is synchronous, the action needs to retrieve the API data before reaching the reducer. Middleware is used to create asynchronous behaivor. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a type of middleware. It allows for multiple manual dispatch actions to be sent to the store when triggered. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

The connect method links up our components with our redux store and allows us to access functions and state as props from within a Component. 
