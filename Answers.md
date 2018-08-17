1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  .filter(), .map(), and .indexOf() - given the same arguments, they will always return the same value - does not depend on or change external state.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  The store is basically the control center for the app, dispatching behavior based on input from the user by coordinating acitons and reducers along with controlling the state. Actions are called when the user interacts with the page, which trigger calls in the reducer to change the state of the app/page which in turn changes the view.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Component state is the state that directly affects or is affected by the individual component - it does not affect other components in the app other than its children. App state controls and is controlled by the entire application, not simply a single component. Component state is useful for storing short-term data, whereas app state stores more long-term important data.
1.  What is middleware?
  Middleware lives between actions and reducers, applying logic to the actions to change the way a developer interacts with the code. Provides tools outside of the regular library.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  redux-thunk is a middleware that allows action creators to return a function instead of an action object, which dynamically displays different views based on the sequence of actions within the app.
1.  Which `react-redux` method links up our `components` with our `redux store`?
  .connect()
