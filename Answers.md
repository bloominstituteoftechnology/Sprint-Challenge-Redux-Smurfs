1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter
.map
.reduce

These are methods that, when used appropriately, can do operations based on the original array while preserving its structure and content.  These methods create new arrays which may be altered without destroying the original data.  This is critical to preserving immutability. 

We can use Object.assign to extend the properties of the original object while preserving the current properties. 


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducers are functions that can control the state within an application that makes use of the Redux library.  Actions are functions that get passed into reducers in order to make specific changes to the state, often as a result of some kind of user event such as an input entry ot a button click.  The store is a single JavaScript object that can be thought of as the holding place for everything that changes about our state. The Application state is immutable meaning that "When changes are made to our application state we never write to our store object. We simply clone the state object, modify the clone, and replace the original state with the new copy. We never 
mutate the original object."


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The biggest difference between application state and component state is that component state is local and application state is global.  Redux uses the store to hold the application state and then a component within the app can access that state.  The component state stay within that specific component and can only be updated within that component.  The component state can be passed down to nested components with props. 


4.  What is middleware?

Middleware refers to software that allows and manages asynchronous behavior within an application.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a type of middleware package accessible within a redux environment. The advantage of using redux-thunk is that, if used appropriately, it prevents the application from getting into an inconsistent state which would result in a bad user experience. Adding middleware to an application results in a sort of intercept point between the action-creators and the reducers. This allows for the handling of asynchronous actions before they are activated through the reducers.  Through the use of middleware, it becomes possible to dispatch multible actions from a single action creator which improves fluidity and efficiency.  

6.  Which `react-redux` method links up our `components` with our `redux store`?

We use the <Provider> component to create a link between our components and the redux store.  The provider component provides our application with the store that will contain the state that the React application will be concerned with.  

<Provider store={createStore(function() { return {} })}>
  <App/>
</Provider>



