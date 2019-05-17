1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
>  .map .filter and .concat; .concat
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
> Actions in Redux are JavaScript objects whose structure holds the only source of data that can be sent to the store; Reducers in Redux are  pure JavaScript functions that describe how an application’s state changes as a result of an action that is received by the store; Store in Redux is a JavaScript object that contains an application’s entire state and possess several methods; in Redux, the store is known as the ‘single source of truth’ because an applications will only have one store, and the data contained is read-only and all changes are made simply by invoking reducers. 
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
> Application state is the current state of the entire application, globally accessible to all components within Redux via the Provider and store; Compponent state is a local state available only to the component and - via the passing of props - to it's children.
4.  What is middleware?
> Middleware is any function that provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer 
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
> "redux-thunk" is a type of middleware that serves to handle asynchronous operations inside of action creators; it allows for the dispatching of multiple actions from a single action creator; it changes our "action-creators" by allowing for asynchronous function returns
6.  Which `react-redux` method links up our `components` with our `redux store`?
> Provider is the "react-redux' method that links up our "components" with our "redux-store"

