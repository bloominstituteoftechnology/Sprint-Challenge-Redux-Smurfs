
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store contains the state of our application which is immutable.
Store is known as the single source of truth because all everything that changes goes through the store.
To change the state we clone, modify and then replace the original state with a new copy but never mutating the original state.

Actions are packets of information that contains an action type and optional payload.
ex. dispatch {type: "ADD_FRIEND, payload: action.payload}

Actions are passed/dispatch to reducers which tell reducers how to update the state.
Reducers are the only place we can update the state. Reducers handle the actions and replace the store accordingly.
Reducers are synchronous by default.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and Component state is local. 
Redux uses the store to hold application state which means any component anywhere in the app can get access to the store as long as they hook/connect into it.
Component state can only be updated within that component and passed down to its children via props.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?


Redux-thunk is a middleware that allows Redux to handle asynchronous operations.
Redux-thunk allows action creators to perform async API calls. 
