1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map, .reduce., filter . Object.assign()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are packets of information that contain an action type and some data that we want associated with that action type. Actions are plain javascript object, or functions that return plain javascript objects. Reducers are pure functions i.e. they don't produce any side effects. They take in two arguments, the current/previous state that they represent, and the action object that is sent to them by the action creator functions. They will never update state directly but will always return a new object. The store is a single JavaScript Object that represents everything that changes in the application. The store contains the state of the application. The store is known as the single source of truth because it is the only place that represents the state of the application.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the state of the entire application, component state is the state of an individual component in the application. Application state would be good if you wanted to affect the entire application. Component state would be good if you didn't want it to affect anything other than that single component.
1.  What is middleware?
Its an extension between dispatching an action and the moment it reaches the reducer.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware that lets you call action creators that return a function instead of an action object. It allows them to delay the dispatch of an action or dispatch only if a condition is met.
1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect()