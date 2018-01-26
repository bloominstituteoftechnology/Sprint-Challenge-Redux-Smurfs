## Essay Questions 

1. 3 JavaScript Array/Object Methods with no side effects:
    a. In general, ones that return a new array/object without changing the original, existing array/object.
    b. map
    c. Object.assign
    d. The method used to create a new object while extending the properties of another object is Object.assign. 
2.  a. Actions: triggered by a dispatch, actions modify data in the Store
    b. Reducers: take the data in the payload of the actions and transfer it to the Store.
    c. The Store: The vault for the data used by the app. It cannot be directly manipulated. All interactions with it are through actions/reducers and State requests. actions and reducers are logged for "playback" later in debugging apps. 
3. Application State vs. Component State
    a. Application State is data that is germane to the entire application. 
    b. Component State is data being manipulated by a single component before being returned to Application State.
4. Middleware provides a way to log actions/errors, report crashes, and make API calls between a dispatch (action call) and the time that action reaches a reducer. This makes it easier to take advantage of the separation of State and the Store. 
5. Redux-Thunk is an asynchronous middleware that allows an app/program to dispatch other than actions. Multiple calls can be daisy-chained together, and the last one must issue an action that has an object as payload in order for the Redux synchronous data flow to occur. 
6. Connect is the method that links the components of a React App to the Store of a Redux App. See [this diagram](./pics/connect.jpg).
