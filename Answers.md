### 1-a. Name 3 JavaScript Array/Object Methods that do not produce side-effects?
----------------------------------------------------------------------------------
`.map`, `.slice`, `Object.assign()`

### 1-b. Which method do we use to create a new object while extending the properties of another object?
---------------------------------------------------------------------------------------------------------
`Object.assign()`

### 2-a. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 
----------------------------------------------------------------------------------------------------------
`Actions` are payloads that send data from your application to your store by using `store.dispatch()`.
`Reducers` specify how the application's state changes in reponse to `actions` sent to the store.
`Store` brings `actions` and `reducers` together by:
	-hoding application state;
	-allowing access to state via `getState();`
	-allowing state to be updated via `dispatch(action);`
	-registering listeners via `subscribe(listener);`
	-handling unregistering of listeners via the function returned by `subscribe(listener)`

### 2-b. Why is the store known as a 'single source of truth' in a redux application?
---------------------------------------------------------------------------------------
Because the state of your whole application is stored in an object tree within a single store.

### 3-a. What is the difference between Application state and Component state?
-------------------------------------------------------------------------------
Application state is global and component state is local.

### 3-b. When would be a good time to use one over the other?
--------------------------------------------------------------


### 4. What is middleware?
---------------------------
Middleware for Redux provides a third-party extension point between dispatching an action and the moment it reaches the reducer.

### 5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
-------------------------------------------------------------------------------
`Redux-thunk` is a middleware that allows you to write `action-creators` that return a function instead of an action. The thunk can be used to delay the dispatch of an action or dispatch only if a certain condition is met.

### 6. Which `react-redux` method links up our `components` with our `redux store`?
------------------------------------------------------------------------------------
`connect`
