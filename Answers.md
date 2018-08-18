Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter .map and .reduce are methods that produce no side effects.
Object.assign is what we use to create a new object while extending the properties of another object.

Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions in Redux are packets of information that contain an action type and some data that we want associated with that action type. You can think of actions as the thing that gets triggered from human interaction with your website. When users interact with our React components, we call our action creator functions that are wired up through connect. Because we give our connectfunction the object of action creators, connect knows how to use dispatch to identify these events as actions.
Actions are plain javascript object, or functions that return plain javascript objects. 



Reducers calculate the new version of state based on the current state and a given Action. 

Reducers take in two arguments, the current/previous state that they represent, and the action object that is sent to them via the action creator functions. Remember that actions give us a packet of information as an object with a type and payload field that we can use. The type is used to tell the reducer what to do, and the payload is to tell the reducer what needs to be updated on state.

When using Redux, the state for the whole application is contained inside the Store.

This is the function that will take in a single reducer (More on reducers later) that will represent our state of our application globally. This createStore function will need to be passed to our main app component in order to be able to access it globally. The way this works is that react-redux gives us a <Provider></Provider> component that we will wrap our entire application within. 




What is the difference between Application state and Component state? When would be a good time to use one over the other?
Your application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.
Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.



What is middleware?
Middleware is a powerful extension point for Redux. We can use middleware to add new functionality to Redux.
There are plenty of third party middleware available for use, but we can also write our own if the need arises.
Intercept every action before it flows through the Reducers.
Middleware can:
stop actions.
forward an action untouched.
dispatch a different action.
dispatch multiple actions.
We can have multiple middleware, the same way we have multiple Reducers.
Middleware runs sequentially, in the order they are defined.
Middleware is added to the store when it is created.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux Thunk is a separate node package called redux-thunk. It provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux Store.
When action creators return an action object the operation is synchronous, with redux thunk, if the action creator returns a function, the operation is asynchronous. The function gets called right away passing dispatch as the first argument, but the code inside the returned function can dispatch the actions at a later time.


Which react-redux method links up our components with our redux store?
connect()

