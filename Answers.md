1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.filter .map and .reduce.  We use .assign. to extend the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are descriptions of the changes that will take place in our application.  Reducers are responsible for updating the storage in our data (listen for specific signals from the application), a representation of our state.  The Store bring both actions and reducers together.  The store is known as a single source of truth because it cannot be changed, it maintains the structur for the state of our applicaiton.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is global and component state is local. 

1.  What is middleware?
Middleware provides a third party extension point between dispatching an action and the moment it reaches the reducer.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux Thunk is used so you can use AXIOS (asynchronous functions) in your actions. it changes "action-creators" by allowing them to return functions.


1.  Which `react-redux` method links up our `components` with our `redux store`? .
Connect.