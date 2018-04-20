1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, reduce, filter.  Object.assign or curly braces with spread operator.

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: a message object that contains type and payload to be dispatched to the reducer for processing
reducers: receives current state and  action.  Uses those to process and update state.
store:  stores application state.

Because store is where all components of an application go to get application state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global to the application while component is local to each component.  When states needs to be shared between components, use application state, if not, use component.

4. What is middleware?
Code that intercepts the action, executes and then lets the flow continue to either the next middleware or the the reducer.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
Middleware that allows the action to execute multiple dispatches which is useful for asynchronous operations.  It changes the action creator to return a function instead of an object.

6. Which react-redux method links up our components with our redux store?
connect

7. Stretch question
Have the DELETE endpoint code return the updated list of smurfs after deletion. 


