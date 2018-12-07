1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three methods that do not produce side-effects are:

    1. Array.map()
    2. Array.reduce()
    3. Array.filter()

The method you would use to create a new object would be Object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The `store` in Redux holds the state for the entire application. `actions` are objects that also return objects and they give us details as to what has changed in the application. `reducers` compose a new version of the state based on whatever object the action has returned.

The store is known as a single source of truth because of how all data flows down from this single point in the application

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The Application state is global (meaning any component in the app can access its state) whereas the Component state is local (meaning that only that component and its children can access its state).

You would use the Component state over the Application state for a component that handles an input form.

4.  What is middleware?

Middleware intercepts every action sent between the action-creator and the reducer. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is a package that lets us write asyncronous code. It changes the action-creators by letting us write functions that has access to dispatch() which can then be returned inside of our action-creators.

6.  Which `react-redux` method links up our 
`components` with our `redux store`?

connect() links our components with our redux store.