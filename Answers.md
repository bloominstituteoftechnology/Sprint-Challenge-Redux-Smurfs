1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Concat, filter and lastly Object.assign which also creates a new object while extending the properties of another object.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store holds our application's state.  Actions are payloads of information that send data from application to the store.  Reducers specify how the application's state changes in response to actions sent to the store.  The store is known as the 'single source of truth' as the state of our whole application is held in its object tree.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global and component state is local.  A controlled input field should be manageed by component state whereas the state of an api call should be managed via store.  
1.  What is middleware?
Middleware is software that acts as a bridge between an operating system or database and applications.  

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is middleware that lets you call action creators that return a function instead of an action object.  The function receives the store's dispatch method which is then used to dispatch regular synchronous actions inside the body once the asynchronous operations have completed. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect is the 'react-redux' method that links up our 'components' with our 'redux store'.