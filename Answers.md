Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .reduce(), and .filter() each return new arrays and thus do not mutate state.

Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

ACTIONS create objects which are the avenue to implement change to the redux store. Using a type key they communicate to the reducer what actions to take and typically a payload in addition.

REDUCERS check the ACTIONS that are received and then returns the object which is then passed on to the store to be updated.

THE STORE is where all the data/state are contained. Container components will access the data and then pass it to presentational components.

What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application states, such as Redux, possess global data that components of all tiers can get access to. They gain access to the application state through use of the connect feature to access the state and actions.
Component State is purely local and limited in scope.
If state needs to be shared by multiple components or multiple pages then the benefits of redux become worthy of implementation.

What is middleware?

Middleware extends the functionality of our Redux package to allow for promises. It intercepts actions before it flows to the reducers which provides developers additional flexibility and agility in their decisionmaking.

Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to make asynchronous calls such as grabbing API data with axios. Redux-thunk grabs the actions dispatched by action creators and returns a function instead of an object. By assigning it to a function, we can call it whenever we wish.

Which `react-redux` method links up our `components` with our `redux store`?

The aptly named 'connect' method provides a way to link up our components with our redux store by using the first parameter mapStateToProps and the second parameter as mapDispatchToProps. The former maps the state to the current component's props and the latter maps the actions to the current component's props.
