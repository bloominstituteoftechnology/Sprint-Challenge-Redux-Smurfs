1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map .filter .concat
Object.assign and the spread operator


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store takes in an object that holds all the state of the app
actions are objects, its data thats given from the application and sent to the store
reducers change the state depending on the actions

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is being used by more than one part of your app
Component state is being used within its scope

1.  What is middleware?

a step in between actions and reducers, it manipulates the store

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it allows us to create actions that return a function

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect