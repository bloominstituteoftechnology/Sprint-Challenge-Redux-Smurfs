1. a. filter, map, Object.assign
1. b. Object.assign

2. Actions are the things we want to happen, but they themselves do not directly change the state. Reducers change the state based on an action. Store is where state lives, and there is only one store per redux application, which is why its known as a single source of truth.

3. Application state refers to the store, the single source of truth, for the whole application. Component state is state that lives on a component, and is only accessed in that component. Application state is used throughout the app, while it would be good to use component state when that state has no meaning elsewhere in the app, for instance, form data that will just be recorded and sent to a server.

4. Middleware is software that sits in our store between actions and reducers. When used, each action first goes through the middleware before going to the reducer.

5. redux-thunk is middleware that handles asynchronous requests. It changes our action-creators in that we don't have to wait for data to come back from a request, and allows the action-creators to return functions instead of plain objects. 

6. connect