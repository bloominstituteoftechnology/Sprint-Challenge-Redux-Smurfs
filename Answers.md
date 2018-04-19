1. .map, .filter, and .concat. We use concat to to create a new object while extending the properties.

2. Actions are the payloads of information that will send the data needed from the application to the store. Reducers will specify how the applications state will change in response to the actions sent to the store. The store is the object that holds everything together. It will allow access to the state, allow the states to be updated and registers listeners.

3. the application state is global while the component state is local. A component can access the application state as long as they are connected into it but a component state is a specific component and can only be updated within that component. 

4. A middleware will intercept every action that comes though it and can then modify it if it wants to and it is used to for asynchronous API calls and other things.

5. A thunk is a function that wraps expressions to delay it's evaluation.

6. the Provider is used to link the components and the store.

7. 