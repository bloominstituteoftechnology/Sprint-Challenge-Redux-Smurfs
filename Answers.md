1. Object.assign(), Array.prototype.forEach(), Array.prototype.map()


We use Object.assign() to create a new object while extending the properties of another object.

2. Actions are objects that are sent to reducers. Reducers accept Actions as input and then update the state of the store depending on the actions that are provided. The store is the main source of truth for react apps. The store in known as the single source of truth in a redux application, because the store holds all the data for the application. In theory, all of the components of a react app will update and get all of their data from the store.

3. Application state refers to the redux store. Component state is the state of an individual component. It's possible for a Component to have state that is not included in the redux store. This includes, for example, a Component which has a form. In such a case, the Component may store information regarding the form without sending that data to the store.

4. Middleware is software that is called prior to a reducer being called. Middleware is used to ensure that a reducer is called with an action that has actually occurred, this is often used for asynchronous Actions.

5. Redux-thunk  redux thunk allows us to make action creators that call fetch and multiple dispatches within them. Using thunk we can send an action at the moment of the api request, allowing the client to know that we're requesting data. Once we receive an error or response from the server we then can update the client to know that the call from the api is finished. Depending upon the success of the call we can then update the state of our application accordingly.

6. the connect() function maps our components with the redux store.



