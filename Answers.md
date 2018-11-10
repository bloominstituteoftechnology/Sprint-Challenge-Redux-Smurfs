1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three array methods that do not mutate the original array: Array.concat(), Array.slice(), Array.filter()
Object method to create new object and extend properties of another object: Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions send data from the application to the store. Reducers control how state changes in response to actions. The store holds the application's state. The store is the "single source of truth" because a single store contains the entire state of the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is stored within a component. If it needs to be used in different components, it must be passed down through props. With application state, state is kept globally in a Redux store. Any component that needs the state can access it. If you find that many of your components are using the same piece of data from state, or that you are passing too many props through multiple levels of components, a global state might be better.

1.  What is middleware?

Middlware is code between an action and a reducer and can be used for many things, such as asynchronous API calls and logging.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows you to call action-creators that return a function instead of an object. This allows us to use the dispatch method to perform asynchronous actions, such as API calls.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect
