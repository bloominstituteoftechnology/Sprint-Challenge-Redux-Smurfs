1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? -- map, reduce, filter. Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? -- Actions take data from our application and prepare it to be used in the reducer. We can call different actions in our application depending on how we want our data prepared. Reducers take prepared data from the actions and update the redux state. The Store is the universal state in Redux that can be accessed anywhere in the application. It is known as the single source of truth because it holds the updated state for the entire application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other? -- Application state can be accesed anywhere in the application by any component. Component state is only held on one component and will differ between multiple instances of the same component. Application state is useful when the same data needs to be accessed in multiple different places. Component state is useful when only one component needs access to some information.

1.  What is middleware? -- Middleware sits between the actions and the reducers to further work on the action's output before being fed into the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? -- Redux-thunk allows us to access server data with axios because we can return functions in our action-creators instead of plain actions.

1.  Which `react-redux` method links up our `components` with our `redux store`? -- The Provider is used to link our app to our redux store.