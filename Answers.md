1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
--Array.filter(), Array.map(), Array.concat()
--Object.assign()


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
--the Redux store is where the data/state for a redux app lives, it is known as the single source of truth because all data altered in some way by the users is stored there and distributed to the components that need it
--actions are object or functions that return objects that are triggered by a user interaction that is attempting to change our data somehow
--the reducers are the functions that configure the new version of state originially kept in our store based both on the previous version of state and the actions that are being passed to them

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
--Application state is composed of data that has the potential to concern many or all components of an application and is therefore kept in the store to be referenced. component state is state kept on individual stateful components that may or may not be passed down to its children via prop drilling instead of independently via the store
--application state would best be referenced in a large application or one with multiple state trees, where a component in an entirely different tree and on a different level uses that info without having to refactor your state using prop drilling or changing the state to be stored on a commonly shared parent component. component state is very useful however when dealing with state/data that you know will never need to be shared outside the given component or a level or two of its children, such as on an input form component

1.  What is middleware?
--middleware intercepts actions before they get passed to the reducers, and can stop them, alter them, or dispatch entirely different actions

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
--redux-thunk is a middleware that lets us handle asynchronous operations. it does this by making the action creators return a function which can dispatch the actions at a later time (like when we finally get data from a promise) as opposed to the actions objects that are normally returned by the creators

1.  Which `react-redux` method links up our `components` with our `redux store`?
--connect