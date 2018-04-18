1. Three Javascript array/object methods that do not produce side-effects are the `map`, `filter`, and `concat`. 

2. `Actions`: are information that send data from your application to your store. They are objects, they have a type property that tell you which type of action is being perfomed. The types are entered as string constants. They only describe that something happened.
`Reducers`: are used to help your application's state change in response to actions that were sent to the store.
`Store`: store is an object that brings in both the `actions`, and `reducers` together. The store holds the application state, allows access to the state, and lets state to be updated.

3. The difference between Application state and Component state is that application state is global and the component state is local. The component state is within a specific component, it can update within that component and pass down to the children through props.

4. `Middleware`: is a higher order function that composes a dispatch function to return a new dispatch function. Its very useful for logging actions, and routing among other things. 

5. `Redux thunk`: is a middleware that lets you write action creators that will return a function instand of an action. Thunk is used to delay the dispatch of an action. 

6. The `react-redux` method that links up our `components` with our `redux store` is the `connect` method. 