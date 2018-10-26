1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
A: .map(), .filter(), Object.assign(). Object.assign().

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A: Actions have a type and a payload which are used to tell the reducer which case to use to modify the state data accordingly. Store is a centralized location for the state that is used in the application, hence why it is called a single source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
A: Application state would be the store the App is using, component state is a local state a component might be using. It might be a good time to use component state when working with form data.

1.  What is middleware?
A: Middleware provides a way to interact with actions that have been dispatched to the store before they reach the reducer. Used for logging actions, reporting errors and making asynchronous requests.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A: It is middleware that allows us to make asynchronous requests. It allows out action-creators to hold and work with promises and return a function that takes in dispatch, giving us access to dispatch.

1.  Which `react-redux` method links up our `components` with our `redux store`?
A: { Connect }
