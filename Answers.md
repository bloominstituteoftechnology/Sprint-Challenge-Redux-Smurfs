1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    * filter, map, Object.assign. Object.assign.

2.  Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    * Actions are things we want to happen, but they themselves do not directly change the state. Reducers change the state based on an action. Store is where state lives, and there is only one store per redux application, which is why its known as a single source of truth.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    * Application state refers to the store, the single source of truth, for the whole application. Component state is state that lives on a component, and is only accessed in that component. Application state is used throughout the app, while it would be good to use component state when that state has no meaning elsewhere in the app, for instance, form data that will just be recorded and sent to a server.

4.  What is middleware?

    * Middleware is software that sits in our store between actions and reducers. When used, each action first goes through the middleware before going to the reducer.

5.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    * redux-thunk is middleware that handles asynchronous requests. It changes our action-creators in that we dont have to wait for data to come back from a request, and allows the action-creators to return functions instead of plain objects.

6.  Which react-redux method links up our components with our redux store?

    * connect
