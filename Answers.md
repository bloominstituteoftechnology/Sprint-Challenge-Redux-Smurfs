1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?


1. Map, filter, reduce methods do not produce side effects. Object.assign(), passing empty object {} as the target parameter.

2. Store's role is to store state of the app. Reducers are used to transition states from previous to next. Actions are what gets feed into the reducer which ultimately tells the reducers which function to execute.

3. Application state is global. Component state is local. It'll be a good time to use local component state over application state when it's something related to that component only, for example, a form with input fields.

4. Middleware is a component in Redux that intercepts every action because they are passed to the reducer. It can stop actions, forward an action, dispatch a different action, and/or dispatch multiple actions.

5. Redux Thunk is a middleware that provides the ability to handle asynchronous operations inside our Action Creators. When action creators return an action object the operation is synchronous, with redux thunk, if the action creator returns a function, the operation is asynchronous.

6. Connect.