##Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?


####Object.create, the spread operator and .concat are all methods that do no produce any side effects.


Alt-H2

## Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?


#### Actions send data from our App to the store, it signals that something has occured within our app and our Reducers respond to those actions accordingly, by updating the state. The store brings everything together, it holds the application state, it allows access to state via getState() and allows state to be updatated via dispatch(Action). Without the store there is no Redux.

Alt-H2

### What is the difference between Application state and Component state? When would be a good time to use one over the other?

#### Component state(React's state), is the state that corresponds to that component only, it does not have access to other parts of the state since it is stored locally. Application state (Redux state), is stored globally in the Redux store. Components can easily gather what is needed from the Redux store by subscribing to it. Redux is better handling data persistence and data/changes while React is better at handling data on a smaller scale like inputs, form submissions and filtering items.

Alt-H2

### What is middleware?
#### Middleware is code you place between your request and response. It allows for asynchronous calls, as well as async API calls.


Alt-H2
### Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
###It allows you to return functions inside of an action.


Alt-H2

### Which `react-redux` method links up our `components` with our `redux store`?
###connect
