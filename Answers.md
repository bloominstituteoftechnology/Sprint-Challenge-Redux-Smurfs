### 1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
`Object.assign()`, `Array.concat()`, `Array.map()`,`Array.filter()`, object destructuring and array destructuring

### 1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The `store` contains all the state for an application. `actions` define the action for the `reducer` and the `action` create will dispatch the `action` to the `reducer`. The `reducer` will receive the `action` from an action creator and change the state in the `store` with a new object. Becuase the `store` is the only place were the state is held, a component that requires data must receive it from the `store`. 

### 1.  What is the difference between Application state and Component state? When would be a good time to use one over the other? 
Application state is the state of all the data used in the application. Component state is ephemeral state that is used in certain places in the application that can be made permanent by being added to the application state or thrown away. Data in a form will have to be stored in component state long enough to be submitted and remain in the application's state.

### 1.  What is middleware?
Middleware are programs that extend redux's functionality. They are connected to redux to intercept and update data before the reducer receives an action. Async actions are a good use case for using middleware. 

### 1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 `redux-thunk` is middleware that allows for asynchronous actions. 
 
 It provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux Store.

### 1.  Which `react-redux` method links up our `components` with our `redux store`?
The `connect` method links up our `components` with our `redux store`. This means that any component can access the store so data doesn't always have to flow from the most parent component. 
