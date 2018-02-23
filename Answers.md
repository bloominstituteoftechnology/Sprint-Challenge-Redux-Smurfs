# Answers


**1.** Three JavaScript Array/Object Methods that do not produce side-effects are:

```map()```, ```concat()```, and ```filter()`

A method we can use to create a new object while extending the properties of another object is ```Object.assign()```.

**2.** Actions in Redux are payloads of information that send data  from your application to your store. Actions are plain JavaScript objects and typically have a ```type``` property.

Reducers in Redux specify how the application's state changes in response to actions sent to the store. They are a pure function that takes the previous state and an action, and returns the next state.

Store in Redux is the object that brings the actions and reducers together. It has the responsibility of holding application state, allowing access to state, allowing state to be updated, registering listeners and handling the unregistering of listeners.

Due to the Store's abilities and responsibilities, it is often known as a 'single source of truth' in a Redux application.

**3.** The difference between Application state and Component state is that Component state is stored locally within the React component. If it needs to be shared with other components, it is passed down through props.

Application state in Redux is state that is stored globally. Any component that needs access to a value can do so through the store. 

A time to use one over the other is simply by figuring out the duration of time in which each piece of state needs to persist for. If it is short, Component state is good. For anything longer, Redux states or other methods may work better.

**4.** Middleware is used in Redux for providing asynchronous API calls. It does so by providing a third-party extension point between dispatching an action, and the moment it reaches the reducer.

**5.** ```redux-thunk``` is a library that allows you to write action creators that return a function instead of an action. We use thunks to delay the dispatch of an action or to dispatch only when certain conditions are met.

**6.** ```connect``` is the  ```react-redux``` method that links up our components with our Redux store.