1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(),  .filter(), .reduce(), .slice(). Object.assign() is used to create a new object.


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In Redux actions are payloads of information that send data from your application to your store and are the only source of information for the store. Reducers specify how the application's state changes in response to actions sent to the store. 



3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. For data needed throughout an app, Application state would be preferable.

4.  What is middleware?

Middleware is some code you can put between the framework receiving a request, and the framework generating a response. 


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to make asynchronous calls in redux. Thunk allows you to write action creators that return a function instead of an action.


6.  Which `react-redux` method links up our `components` with our `redux store`?
Connect