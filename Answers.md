1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, Filter, spread operator
Object.assign / Spread operator


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are dispatched to the reducer and contain an action type aswell as new information that is needed to create the new state. They are created in action creators
The reducer takes any new / changed data, combines them with the old state and creates the new state while discarding the old one.
Store is what includes Middleware, Reducers and the state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is only achievable through stateful components (ie classes). It is easy to implement and should be used in small applications or if you need data in only the component itself (if you are using redux)
Application wide state can be achieved using Redux or React Context, should be used in complex applications where we need to have our state available in a lot of components or multiple levels deep

1.  What is middleware?

Middleware simply invokes all functions that your actions contain.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It changes our action creators in a way that we aren't returning plain objects anymore but functions ( which are then called by thunk as the middleware). Also it allows us to use dispatch wherever.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect
