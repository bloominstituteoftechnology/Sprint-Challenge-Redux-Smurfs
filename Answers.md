1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    -map(), filter(), reduce(),
    -Object.assign()
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -Actions are payloads of information that send data from your application to the store.
    -Reducers specify how the application's state changes in response to actions sent to the store.
    -The Store brings the actions and reducers together to hold an app's state
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -Application state is the "Global" state that can be accessed anywhere in a properly-set-up Redux app.
    -Component State is a this.state set on a component that can hold data relevant to that component and no others.
4.  What is middleware?
    -Middleware is computer software that provides services to software applications beyond those available from the operating system
    -Middleware that comes from react-thunk and allows us to write asynchronous dispatchs in our actions.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -redux-thunk is a type of middleware that allows us to write creators that return a function instead of an action.
6.  Which `react-redux` method links up our `components` with our `redux store`?
    -applyMiddleware(thunk)
