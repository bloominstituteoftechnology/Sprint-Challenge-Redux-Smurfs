1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - The 3 first JavaScript Array/Object Methods that do not produce side effects that comes to mind are: Object.assign() Array.concat(), and Array.filter().
    - To create a new object while extending the properties of another object we can use Object.assign().

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - `actions` are little packets of data delivered to reducers that tell the reducer what to do, they are created by `action-creators` 
    - `reducers`are functions that take in, as arguments, a previous state and an action, and return an end state. They are the only way to change the state tree. 
    - `store` holds the application's state tree, along with useful methods to interact with the state tree like getState(), dispatch(), and subscribe().

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state is the Redux state tree for the entire application, it is most useful when handling data that might be used by multiple components, and when handling large/complex data objects. 
    - Component state is the React state object for a single component that can be passed to child components. It is most useful when handling more simple data that is unique to a single, or a couple of, components. A great example is in form field handlers.

4.  What is middleware?
    - From a redux perspective, middleware is code that executes in between the creation of an action and the dispatch of that action to any reducers. The action passes through any (all?) middleware and only then is dispatched to the reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - `redux-thunk` allows our `action-creators` to generate actions asynchronously.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    - The `react-redux` method that links our `componenets` with our `redux store` is connect();
