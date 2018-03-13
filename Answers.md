1. array.slice(0),  array.map(), array.concat(). Object.assign({}, myObj).

2. -Actions send information from the application to the store. The only source of information for the store. 
-Reducers specify how the application's state changes in response to actions sent to the store.
-Store holds the whole state tree of your application. The only way to change a state is to dispatch an action on it.

3. Your Application state is global and your Component state is local. If your app is small, you don't need to centralize all the states and just pass data through props.

4. Middleware is code you put between the framework recieving a request, and the framework generating a response, providing a third-party extension point between dispathing an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

5. Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

6. The connect() method links up our components with our redux store.