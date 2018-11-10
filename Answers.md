1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
Object.assign, array.map and array.filter. Use object.assign to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads that send data to the store. A reducer is how the application's state changes in response to the actions. And store holds all the objects together which represents our global state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is like a global state, while component state is state that is used only in that component. It's better to use component state when you have state that doesn't need to be accessed throughout the entire application.

4.  What is middleware?
It's a third party that gets called before being dispatched to the reducer

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It allows you to write action creators that return a function instead of an action.

6. Which `react-redux` method links up our `components` with our `redux store`?
connect