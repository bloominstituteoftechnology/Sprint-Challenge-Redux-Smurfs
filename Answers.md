1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign - used to create a new object while extending properties of another object.
array.map
array.filter

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions describe the changes that are taking place. They include an action type and the information associated with that action type. When an action is triggered, the action gets sent with the type of action it is and the information necessary to to be changed in the store.

Reducers are used to change the state in the store. The reducer looks at which action type has been sent to it, the current state, and some instructions on which data in the state needs to be changed. The action potentially sends new data via payload that the reducer may need to use to change the data on state. Then the reducer sends a new object to the store, which is used to replace the old state.

The store is the 'single source of truth' because it holds a global state that can be used throughout the entire application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is held in the store when using Redux. It can be read throughout the entire application.
Component state is state that is held locally on an individual state. A good use case for component state is when you have a component that has an input/form. The data entered into the input fields can be held on its local state, then sent to the store when an action sends it through a reducer, and then to the store.


4.  What is middleware?
Middleware extends the functionality of Redux by intercepting actions and doing something with them before they go to the reducers. The can stop an action completely, change the action, send multiple actions, etc.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It is Middleware that provides the ability to handle asynchronous operations inside of action creators. Instead of our actions just returning a synchronous object, using redux-thunk they can return a function that can return multiple actions. Specicifically, the way we used it was with API requests. When the action gets triggered, one action type gets sent to the reducer, then once our API fetch is completed, it can send another action request to the reducer to update the store again.

6.  Which `react-redux` method links up our `components` with our `redux store`?
connect