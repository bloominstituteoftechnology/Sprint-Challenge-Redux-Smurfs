1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map(), filter(), reduce() and Object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are packets of information that contain a type and some data. They are events that are triggered by interaction. Reducers calculate the new version of state based on the current state and a given action. They represent a portion of state. The store holds the entire state of the application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is held in the redux store and is connected to the container components. These components receive state as props and pass them down to presentational components. The complexity of the state determines when one method should be used over the other.

4.  What is middleware?
Middleware intercepts every action before it flows through the reducers. It can stop actions, forward an action untouched, dispatch a different action, or dispatch multiple actions.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware that allows asynchronous performance. The action creators can then return functions as well as objects. 


6.  Which `react-redux` method links up our `components` with our `redux store`?
Connect()

