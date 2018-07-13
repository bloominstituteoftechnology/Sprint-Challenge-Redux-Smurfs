1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Three Array Methods that do not produce side-effects are '.filter', '.map', and '.reduce'. The Object.assign() method can be used to create a new object on top of extending the properties.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are functions that classify the type of requests with it's associated data as well as add logic. Reducers receive the actions through a dispatch method, and will set the state object based on the given action. The store is where a majority of the application's data is housed in order to contain the state. It's known as a 'single source of truth' because all the data is assigned to the store object and only accessed by means of actions and reducers.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is data relevant or required for the entire application whereas Component state only pertains to the respective component. Application state works better when there is data that is needed in multiple components. Component state is appropriate when a functionality of that component is implemented.
1.  What is middleware?
Middleware is software implemented in between requests that control the actions before dispatch, allowing the ability for asynchronous requests.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk in conjunction with middleware, gives us the ability to return a function inside our action creators. Action creators are now able to dispatch multiple actions.
1.  Which `react-redux` method links up our `components` with our `redux store`?
This would be the connect method.
