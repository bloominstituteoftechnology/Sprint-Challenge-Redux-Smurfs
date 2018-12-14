1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
        The the three Array methods are map, filter, and reduce. We use map to create a new object
        while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        Actions- When a user interacts with a website they set off "actions" which are packets of information that holds data associated with changes and has descriptions of the changes. Actions are functions that return JavaScript objects or even JavaScript objects themselves.

        Reducers- are pure functions that never produce any side effects. When an action is dispatched it flows through reducers. Reducers take in 2 arguments the state and actions. Reducers never update state directly but always return a new object.

        store - is an object with a methods on it, that holds the whole state of the application. The only way to change the state is to dispatch an action on it.

        The store is known as a 'single source of truth' because it contains the whole state tree of an application which is especially important as an application becomes large scale and all that data needs to be managed within a 'single source of truth'

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
        Application state is global and Component State is local to that component and can not be seen outside said component.

4.  What is middleware?
        Middleware (an extension) adds new functionality to Redux by intercepting every action before it flows through the reducers. An example of this would be using middleware to handle 
        asynchronous operations.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        Redux thunk allows us to dispatch multiple actions from a single action creator. This is because it provides the 'action-creators' with an ability  to return functions that have
        direct access to the dispatch method.

6.  Which `react-redux` method links up our `components` with our `redux store`?
        The Provider component links up our components with our redux store.
