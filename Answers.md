1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    *Array.map()*

    *Array.filter()*

    *Object.assign()  - uses to create a new object while extending properties of another object*

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    ***Actions** - these are objects that provoke changes to the state of our application.  The action objects contain a type property that describe what type of action that it is.  It also may contain one or more properties that contain the data that is necessary to make the change to state.*

    ***reducers** - these are pure functions that accept the current state within the store as well as an action. The reducers make the actual change to the state within the store. The change of state is based upon the action type that is passed into it.*

    ***store** - The store is the 'brains' of redux.  The store contains the current state of the application. It is known as a single source of truth because it is the singular location that tells the true, current state of the application.  It also contains methods that allow redux to perform its tasks. The main methods are getState(), dispatch(), and subscribe().*

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    *Application state is the state stored within the Redux store. This is 'global' state and can be made available to all components if necessary.  This is good to use if data will need to be used across more than one component or across different component branches within the app.*

    *Component state is state that is stored within one component. This is 'local' state and is good to use if the data is only needed by the local component and possibly by a child component.* 

4.  What is middleware?

    *Middleware is code that is placed between the action and the reducer function.  Middleware is used to manipulate the data in some way before being dispatched to the reducer. Middleware can be used to stop the action from occurring, can cause a different action type to be dispatched, or can dispatch multiple actions.*  

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    *'redux-thunk' is middlware that interceps the action before being dispatched to the reducer. It is used when we make asynchronous api calls. It allows us to control exactly when to dispatch the action(s) to the reducer.  When using redux-thunk our action creators return a new function rather than simply dispatching an action.  The function that our action-creators return accepts the dispatch method as a parameter.  Since we have access to the dispatch method, we can control when we make the dispatch to the reducer. For example, we can explicitly make the dispatch only after receiving a response from our axios.get method call.*

6.  Which `react-redux` method links up our `components` with our `redux store`?

    *The connect method links our components to the redux store.  
    An example of this is as follows..*  
    
    ```export default connect(mapStoreToProps,{createUser})(ComponentName);```