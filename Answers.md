1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
   -.map .forEach .filter .slice .concat .reduce* all do not produce side effects
	-Object.assign() is the method we use to create a new object while extending the properties of another object

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   - actions: are on change events that triggers a reducer to run to update the state. State doesn't necessary change every time an action takes place; however, the state is re-rendered even if it's just back to the "default" state.
	- reducers: run on initial load, and when actions occur.  A reducer takes the state and an action and uses a switch statement to update the global state according to the action.type passed. One must remember reducers return the ENTIRE state.
	-store: maintains the global state for an application. It is the single source of truth as all components who utilize the store must be connected to it.  Furthermore, the state is never mutated directly.  Instead the reducers update the state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
	- application state or global state can be used with any component without having to pass props as arguments. Meanwhile component state is local to that component and must pass props as arguments to every other component that uses that state.
	- global state should be used in large applications where passing props to unrelated components is not feasible while local state should be used for components that hold state only relative to a singular component or related component.

4.  What is middleware?
	-middleware helps in redux application by giving us extended functionality like the ability to watch our application state through a log or the ability to control when actions are dispatched.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
	-redux-thunk allows us to incorporate axios within our project to dispatch actions after a given amount. Since redux is synchronous, thunk must be included to run asynchronous actions

6.  Which `react-redux` method links up our `components` with our `redux store`?
	-The connect method links components to a redux store via mapStateToProps, mapDispatchToProps, and the component name.