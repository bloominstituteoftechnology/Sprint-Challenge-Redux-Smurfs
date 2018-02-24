# Redux Fu Answers

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
> The methods `slice()`, `concat()`, and `map()` do not produce side effects and return a new array without modifying the array put in to the method. We can use `Object.assign()` to create a new object while extending the prperties of another object.
2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
> * `actions`: take input from the user and send it to the store to produce a new state
> * `reducers`: take actions from the actions or from middleware as the previous state and produce the next state of the aplication.
> * `store`: manages all of the state and sends it to the view layer so that it can be rendered as output in the app.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
> * `Application state`: the data that is being used in the application.
> * `Component state`: how the data is being rendered at a particular moment within the app.
4. What is middleware?
> * `Middleware`: could be an API or any external functionality that changes the state external to the app itself between when the actions are fired off and the reducers take in the data from the actions.
5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
> * `redux-thunk`: middleware that works with redux and helps us to do functions asynchronously within redux.
6. Which `react-redux` method links up our `components` with our `redux store`?
> * `connect()` used in conjunction with `mapStateToProps()`