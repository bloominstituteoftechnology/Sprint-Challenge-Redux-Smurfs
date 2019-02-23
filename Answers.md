### 1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array methods we can use: `.map`, `.filter`, `.forEach`. To create a new object while extending the properties of another object, we have two options. We can use `Object.assign()`, or we can use the spread operator.

### 2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are functions that return an object. The object that gets returned **HAS TO HAVE** a type. This object is then passed to the reducer as the action. The reducer needs to be coded to take in the action and do something based on the action.type that is passed in.

The store is where the application state resides. When creating a store, you pass in a reducer. The reducer has an initial state, then depending on the action that is passed into it, the application state will be updated accordingly.

### 3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state that can be accessed by any component in the app as long as it is wired up correctly with Redux. Component state is the local state on a specific component. A good time to use component state is when **ONLY** that component cares about that state/data. If it is not needed anywhere else in the app, it doesn’t make sense to have it in the store.

### 4. What is middleware?

In our case, middleware is code that extends the functionality of Redux. We need to applyMiddleware and import the middleware we want to use. This middleware will then hijack our data flow and perform specific functionality.

### 5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk gives us async functionality. We can control our dispatched in our action creators rather than a dispatch automatically getting sent out.

### 6. Which `react-redux` method links up our `components` with our `redux store`?

The react-redux method that links up our component to the store is `connect()()`. In connect, we tell it what props we want the component to have access to via `mapStateToProps`, and what action creators to have access to via `mapDispatchToProps`.
