1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter(), .map(), .reduce()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions in redux are changes that occur within the application typically as an effect of user interaction with the webpage. Actions are passed to dispatchers and then to reducers.
Reducers calculate a new version of the state based on the current state and the given action. The store is known as the single source of truth because it contains the state of every component in the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state/ Redux store is global, meaning that it is a state that any component can access, as long as they connect to it. Application state would best be used when a state needs to be access by multiple components. On the other hand, component state is local and can only be accessed by itself and its children. Component state should be used when it does not need to be accessed by many other components.

1.  What is middleware?

Middleware is an extension of Redux, which has the ability to intercept actions before it flows through the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that can handle asynchronous operations inside action creators. Allows our action creators to use the dispatch() method of the store.

1.  Which `react-redux` method links up our `components` with our `redux store`?

<Provider>
