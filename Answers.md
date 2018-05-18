1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Three JavaScript array methods that do not produce side effects are filter, map, and reduce (as they all produce new arrays rather than mutating the original one).
The method we use to create a new object while scaffolding off of another object as a template and adding onto it is Object.assign.  It's important to always do this with objects as objects are references and due to that if you just assign another variable to an object, you will end up changing the properties on the original object even if you're only directly changing the newly created one.  Object.assign creates an entirely new reference instead of using the reference to the original object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are Javascript objects that describe what changes are going to occur in an app.  Actions are sent to reducers.
Reducers actually lay out how things will change.  They receive actions and then figure out how state will change based upon those actions.
The store is the storage of all of the state for the app.
The store is known as the single source of truth in a redux application because the store is supposed to contain the state of the entire application when working on a redux application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state that's contained in the store.  Component state is local state that is contained in individual components and not connected to the Redux store.  When you want data to persist or if data is used by several processes, it's a good idea to keep that data in application state.  If you have a small piece of data that doesn't have to persist and that doesn't really affect anything else, it might be a good idea to keep that in component state.

1.  What is middleware?
Middleware is like the glue that can connect two different technologies together.  In the case of our recent programming, we used redux-thunk and logger with our React/Redux applications.  They're separate technologies, but they can be used together without producing side effects.  Middleware in the case of Redux acts as a bouncer for information going between action dispatch and that action being sent to the reducer so that things may be manipulted enroute (such as the time it takes for an action to reach the reducer).

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware that allows us to write asynchronous code in our Redux applications.  Redux is by nature synchronous, so if we want to do anything that revolves around promises, we need a middle-man to referee between the actions and the reducer.  It changes our action-creators by making them return functions rather than returning objects.

1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect is the method that links our components to the redux store.