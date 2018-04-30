1. 
Map,Reduce and filter don't produce side effects. For objects assign method can be used to make a new object.

2.  
Actions are objects with a required type field and possible other fields that are sent to reducer.
Reducers take in an action object and update the state by making a new state object.
The store holds the state and has methods to get and dispatch actions.

3. Application state is state that is needed throughout different components or the entire application. Component state is generally just internal or passed down a few child components.

4. Middleware is additional functionality that happens to an action before reaching the reducer.

5. Redux-thunk is middleware that allows us to dispatch asynchronously. We can modify our actions to return a function with dispatch passed in.

6. connect() with a mapStateToProps function/object and a mapDispatchToProps function/object.