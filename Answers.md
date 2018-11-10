1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, reduce, filter
Object.create/Object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are functions that pass data from store to app, 
reducers change state in response to actions, 
store is where the state lives and is cool because its accessible without having to be passed through all parent components, can just share direct

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is global, while component state is local. if state data needs to be passed between components use global

4.  What is middleware?

basically a chunk of code that allows us a way to interact with actions before they reach the reducer, for things like logging or changing the action 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

6.  Which `react-redux` method links up our `components` with our `redux store`?

connect()()