1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map
Reduce
Filter
.concat can be used to create a new object while extending the properties of  another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions: payloads of info that are sent from your application to the store
reducers: specify how the app's state changes in response to actions sent to the store
store: brings actions and reducers together. Store also does the following, which is called the single source of truth.
1-holds state
2-allows access to state via getState
3-allows state to be updated via dispatch(action)
4-registers listeners via subscribe(listener)
5-handles unregistering of listeners via function returned by subscribe(listener)

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, component state is local. Redux uses store to hold application state, meaning any component can access it. Component state lives within a specific component, and can only be updated within that omponent and passed down to its children via props.


4.  What is middleware?
Middleware extends redux and allows it to do some cool things like promises. Middleware intecepts actions before they reach the reducer and can stop actions, forward action untouched, dispatch different actions, dispatch multiple actions. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
its a separate node package that allows us to have our action creators return functions that have direct access to the dispatch method.

6.  Which `react-redux` method links up our `components` with our `redux store`?
the connect method.