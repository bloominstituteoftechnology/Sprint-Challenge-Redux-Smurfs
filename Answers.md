1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- There is .map(), .reduce(), and .filter(). They return new arrays and do not mutate the original state. We can use Object.assign() to create an empty object and pass in other properties as we wish.

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- *Redux* is a single source of truth where all the date is held. This is to follow the unidirectional data flow and simplify where data orginates. It can be confusing when many components hold different state, but with Redux there is just one. It's easy to see how the data flow is carried out and help reduce side effects.

- *Action* are objects that are created by action creators and is the only way to change with data in the Redux Store. They have a type key to tell the reducer what actions to take and usually a payload containing data being passed through.

- *Reducers* check the actions that are received and makes the necessary changes to return an object which is then passed on to the store to be updated.

- *The store* is where all the data is generally held. This includes our state as well as our reducers. Other container components generally connect to the store to access data and render it out to their children presentational components.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application states, such as Redux, has global data that components of all tiers can get access to. They gain access to the application state by using the connect feature to access the state and actions.

- Component State usually has data for just usually for itself or its children. In Redux, they also hold data temporarily to be modified before dispatching to the action creator. In one example, we use creating or updating forms to take in user information and package it inside that component's state before sending it off.

- It's a good time to use Application state when the software scales up. Despite its cumbersome boilerplate and complexity, the point at which the benefits vs the implementation is a judicious one that the developer would know according to the project's demands.

4. What is middleware?

- Middleware extends the functionality of our Redux package to allow for things like, promises (which are asynchronous). It intercepts actions before it flows to the reducers so there can be more precise control of the flow. We use redux-thunk and redux-logger this week as middleware.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux-thunk is a middleware that allows us to make asynchronous calls such as grabbing API data with axios. Redux-thunk grabs the actions dispatched by action creators and returns a function instead of an object. By assigning it to a function, we can call it whenever we want instead.

6. Which `react-redux` method links up our `components` with our `redux store`?

- Connect is a method provided to link up our components with our redux store by using the first parameter mapStateToProps and the second parameter as mapDispatchToProps. The former maps the state to the current component's props and the latter maps the actions to the current component's props.