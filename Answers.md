1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  - Array.concat()

  - Array.map()

  - Array.filter()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`actions` - when an action is performed, the action type will convey to the reducer and determine how to change the state by creating a copy, modifying it from the copy which previously had the original state on it.

`reducers` - a reducers' responsbility is mainly to determine how the state should be changed and what that will look like.

`store` - the store contains an object tree, every aspect about the application is determined here. Dispatching an action is the only way to affect the state inside of the store and as mentioned above, that's done with a copy, not from modifying the original.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state - Application state is needed everywhere in the app

Component state - Whereas, component state is only needed in that single component

Perhaps, when data can start to bog down an application it may be wise to use Application state.

1.  What is middleware?

Middleware extends the functionality of something else

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` - it's middleware. It allows for asynchronous code in Redux

1.  Which `react-redux` method links up our `components` with our `redux store`?

The `react-redux` method that links up out `components` with our `redux store` is connect()