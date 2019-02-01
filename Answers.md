1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  Filter, map, reduce.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are the only way to send data from the app to the store. a store holds the whole state of the app. reducers specify how the state changes in response to each action. The store is known as the only source of truth because of the one way data flow that makes the only way to update the state through the reducers.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
The application state is all/most of the state. Component state is state that only needs to be used by one component. an example of component state is the input value in an form.
1.  What is middleware?
Middleware intercepts between the action and the reducer.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A middle ware that lets you return a function instead of an action object from action creators.
1.  Which `react-redux` method links up our `components` with our `redux store`?
applymiddlware
