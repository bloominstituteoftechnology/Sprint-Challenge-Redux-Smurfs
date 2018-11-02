1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? Map, Filter and Reduce  Map is used to create
a new object


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your application to your store.

Reducers specify how the application's state changes in response to actions sent to the store.

The Store is the object that brings them together.



3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Your application state is global, and your component state is local. 


4.  What is middleware?
Middleware is some code you can put between the framework receiving a request, and the framework generating a response.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. 


6.  Which `react-redux` method links up our `components` with our `redux store`?
