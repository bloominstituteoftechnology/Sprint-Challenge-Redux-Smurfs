1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter, reduce. --> map

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions - actions are functions that are invoked to pass along payloads of data that get sent from your app to the store and are the only source of information for the store.

    reducers - reducers specify how the state will change in response to actions. When they are called, they capture information and inject it into the state.

    store - store is the place where all of your state lives in a redux application. Store is known as a single source of truth because it holds our entire state tree and acts as a 'master state' for the application, allowing us to send state down as needed.

1)  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is state that lives in the store and is global. Componenet state is state that lives in the component (local). Short-term data that will likely change rapidly such as the characters present in a text field as the user types is best to store locally as component state. Data that needs to be accessed from multiple places in the application would best be stored globally as application state.

2)  What is middleware?

Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. Examples of different uses for middleware include logging actions, reporting errors, making asynchronous requests, and dispatching new actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()()
