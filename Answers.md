1. Three methods are .filter(), .map(), and .concat() which is used to combine different elements to extend the properties and create a new object.

2. Actions are functions that determine what to do in a redux app and reducers perform that by changing just what is needed in the store and creating a new one without altering the previous one. The store is all of the data of the app, the state.

3. The Application state is the container component and acts globally in that anywhere in the application can receive data, it is linked to the store in Redux. Component state is local and must pass down data only through children using props. Ideally, you don't need to wire every component up to the app state/store. At that point you use this.state. If your only trying to affect one component though, you're better off just using component state.

4. Middleware is a package of Redux that can be passed into the createStore function to use its packages, like thunk and logger.

5. Redux-thunk is a package of Middleware, which is a package of Redux. It allows us to create actions to handle http requests. It allows our action-creators to return functions instead of actions. The method we use is connect()