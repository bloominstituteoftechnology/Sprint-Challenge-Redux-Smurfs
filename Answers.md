1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    
    spread opperator, map, filter.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are either objects or functions which result to objects which feed into the reducer which contains the logic behind state modification and the store is the overall state container or the single source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the overall state of the entire application or the store. Component state applies only to the component in question, and should be used for temporary information like event handler values for input's

1.  What is middleware?

    Middleware handles aysnc requests. Action creators create actions with async requests in the form of functions and the middleware intercepts this add returns an object to the reducer.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux thunk provide the middleware with ability to take in aysnc functions and return objects to the reducer.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    Provider
