1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? <br>
    .map, .filter, and .concat are methods that do not produce side effects. They return a new array based on the callbacks passed to them without mutating the initial array. If we want to create a new object, we'd use Object.assign and pass {} as the first parameter. Alternatively, we could use the spread operator and spread in state {...state}, which would return a new Object.
<br><br>


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? <br>
    Store is the global storage object. It is responsible for setting the state. It's immutable (i.e. we cannot change it directly); because we cannot rewrite or reshape our state, it is a SSoT. An action contains a `type` and a `payload`. Actions describe what will change and provide the associated data; they get triggered by user interaction with the front-end. We dispatch actions to the reducer to update state. Reducers are pure functions that calculate the new state based on current state and an action. All reducers will return a new state object (i.e. a clone of the previous state along with any updates). Because of this one-way data flow, we can ensure that the store is an SSoT. 
<br><br>


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other? <br>
    Application state, in Redux, is equivalent to what's inside the store. This should contain data that's needed in multiple branches of the component hierarchy. Component state is the data on a given container component (in Dan Abramov's words). We should use Component state when the data does not need to be shared horizontally (i.e. to siblings) in the component tree. 
<br><br>


4.  What is middleware? <br>
    In the context of Redux, middleware is software that can intercept actions before they go to reducers. After intercepting, middleware can stop the action completely, forward it untouched, dispatch a different action, or dispatch multiple actions. We can have multiple types of middleware, just as we can actions and reducers. For example, Redux Thunk and Redux Logger are middleware. 
<br><br>


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? <br>
    In Redux, reducers work synchronously. This is a problem when we want to perform async requests in JS. Redux Thunk is a middleware created by Dan Abramov to allow for that async behavior. With Thunk, action creators return a function instead of an action. These functions are intercepted by the Thunk middleware: instead of going straight to the reducer and computing immediately as a normal action would, a thunk (read: unevaluated function) can be asynchronously invoked to perform the work later.
<br><br>


6.  Which `react-redux` method links up our `components` with our `redux store`? <br>
    The HOC `connect` from `react-redux` enables us to link components to the store. By using connect, we can connect the store's state and dispatch to the props of the component (we'd want to use MapStateToProps in that case as well, which brings in the store and makes it available as props). When you look in the React DevTools, you'll see that the component will be wrapped in another component that has connect in its name. Also, note that only components within the Provider component can be "connected."