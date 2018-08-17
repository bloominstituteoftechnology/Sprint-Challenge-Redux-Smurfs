1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.concat() .from() Object.assign(), Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions-payloads of data that send info from app to store
reducers-specify how state changes in response to actions, mutates it
store-brings actions and reducers together while also holding onto state, allows state to change through all of the above

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

app state is global component state is local
if you want global properties passed along to all your children use app state, if not use component state

1.  What is middleware?

something your requests and responses go through before they get to where they're going and checks/screens them

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk allows us to use dispatch in our actions

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect