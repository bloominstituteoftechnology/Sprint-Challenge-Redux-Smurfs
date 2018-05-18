

1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign, map, filter

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are payloads of information which send data from your UI to the store.
- Reducers specify how an applications state changes based on the data sent to the store by actions
- Store has several responsibilities, including: holding app state, allowing access to state(getState), and allowing the state to be updated (dispatch). 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state which can be used by multiple components. Component state is local state which is generally only used by that one component.  If the data on state needs to be used by multiple components, use App state. If the data is only relevant to the component in question, use Component state.

4.  What is middleware?

Middleware is a tool in redux used to call data from the API asynchronously, using thunk and logger. Also allows use of dispatch.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to use dispatch and axios (Promises) inside our action creators. 

6.  Which `react-redux` method links up our `components` with our `redux store`?

connect
