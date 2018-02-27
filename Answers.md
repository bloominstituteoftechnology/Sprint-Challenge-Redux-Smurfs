1. Map, filter, concat. We can use the spread operator for a shallow copy.
2. Actions trigger reducers which return a complete copy of the overall state. The store is only accessible to the reducers and is available to all parts of the code that request it.
3. Application state refers to the overall redux state, while component state is useful for other things, such as when taking in data from the user in preparation to send it to the redux overall state.
4. Middleware works as a bridge between the redux and the applications.
5. Redux-thunk allows us to have an action return a function instead of an action.
6. `connect` does this.
