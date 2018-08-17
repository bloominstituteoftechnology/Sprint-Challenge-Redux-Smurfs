1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign() and Array.filter()/.map()/.concat().  Object.assign() is what we use to create a new object, extending a pre-existing object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`Actions`: are objects to be passed, with a payload and action-type tag, by action creator functions to a reducer.  
`Reducers`: are 'pure functions' that take the state of an app and amend the state with a payload provided by an action.  Its job is to update state in a functional manner, thus keep data immutable.  
`Store`: contains an apps state and provides the methods with which directly affect or apply to its state.  Store is the single source of truth, because it is the single source from which all aspects of an (client-side) app retrieve state and display UI/data.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the 'single source' of state for the application at-large.  Whereas, component state is state that applies to a single component at a given time.

4.  What is middleware?
Middleware is software designed to extend the functionality of other, specific software.  In the case of Redux, middleware examples are that such as thunk and logger. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`Redux-thunk` exemplifies how convoluted React's relationship is to Redux is.  In seriousness, it provides Redux with asynchronicity, allowing action creators, which otherwise only return objects, to return callbacks (e.g., the use of promises);

6.  Which `react-redux` method links up our `components` with our `redux store`?
The `react-redux` method that links components to the store is 'connect'. 