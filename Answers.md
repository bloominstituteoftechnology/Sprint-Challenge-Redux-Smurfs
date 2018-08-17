1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
        Map, filter, and concat are the 3 methods. Map
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        Actions contain data of what's getting changed. Reducers manage the actions and update values in the store. Store is where all the data is kept, essentially being the state for the whole app, hence the 'single source of truth'.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
        Application state is accessible throughout the entire application, where component state is local to the state of the component unless specifically passed to another component. Application state is more beneficial for larger applications that have many components because access to the state data is easier than passing up or down a large tree to give different components access.
4.  What is middleware?
        Middleware is an extension of Redux that intercepts actions before they are used by reducers, giving new functionality.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        Thunk is a node package that gives action creators access to dispatch method which can trigger a state change.
6.  Which `react-redux` method links up our `components` with our `redux store`?
        Connect 
