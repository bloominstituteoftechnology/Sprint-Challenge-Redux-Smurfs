Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array: map, filter, concat
Object: assign
But we really just spread these days (...)

Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store contains our state for the application and will keep track of all the changes made to our state. This makes it the single source of truth since it is the only spot containing state. 
The actions are the events that occur in your app. They will send data from the user interactions, API calls, form submits, etc. to the store.  The action is simply an object that serves as a packet of info containing the action type and data from the action. 
The reducers are pure functions (i.e. there are no side-effects) that take in two arguments (currentState and action) and return one object (the newState). 

What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application states are treated as immutable: we clone the state object, modify the clone, and replace the original with the clone. In redux, it is kept in the store and can only be modified through the reducer receiving actions. This state should keep info/data that is used by a variety of our views and needs to be passed around. 
Component state is the state kept in a classical component, as in the traditional sense of React. This requires you to use props drilling and functions in order to pass the info from component to component. It is only useful for UI state, such as form input. 

What is middleware?

In redux, middleware will intercept an action before it reaches the reducer, run a function, and then either stop the action, forward it untouched, dispatch a different action, or dispatch multiple actions. Middleware will run sequentially in the order they are defined/added to the store.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-thunk is a middleware that provides the ability to handle asynchronous operations inside our action creators. Redux is normally synchronous and therefore redux-thunk allows us to do things like API calls. 

Which react-redux method links up our components with our redux store?
connect()
