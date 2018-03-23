1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign copies the first object and can overwrite the properies if a new value is passed to it.
concat merges 2 arrays creating a new one containing elements from the original arrays
Object.assign copies objects and perform a certain operation on the data and pass it to the new object. 


2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are javascipt objects that send data from the application to the store.
Reducers specify how the state changes as a result of a certain action sent to the store
Store is responsible for maitaining the whole state tree. Because it mainits the whole state tree it is a single souce of truth. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
An application state is when the state is maintained by the application itself, where as the Component state is state is controlled by Component store in the case of Redux. 


4. What is middleware?

A middleware is used to support asynchronous action, it does this by letting you using dispatch to send async action 

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware and handles asynchronous requests.  It allows us direct access to store dispatch, it also teaches action creators new trick so that they can return a new function and gives these function access to dispatch. 


6. Which `react-redux` method links up our `components` with our `redux store`?
connect 