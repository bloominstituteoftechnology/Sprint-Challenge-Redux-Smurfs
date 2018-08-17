1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.map, object.filter, object.reduce
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions: Dispatch events and modify data for storage
Reducer: Handles the dispatch and sets the intial values of the store
Store: Where data is stored. It is the single source of truth because the application is strutured around reading and replacing data in it.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application State: What's in the store
Component State: What's in this.state for that particular component.
1.  What is middleware?
Middleware are other pieces of code inserted between React and Redux
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk allows you to write action-creators that return a function instead of just dispatching an action 
1.  Which `react-redux` method links up our `components` with our `redux store`?
<Provider store={store}>
</Provider>