## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?  :: slice, spread, and assign.  Use class extends or set the object key/value to '...obj'.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? :: The actions do all the hard labor of making things happen as a user interacts (though their own actions) before differing to the reducers which take the dispatch/exported 'actions' and use those to update or change the store which holds all matter of state - as in, it's the boss of all bosses and all state is based off of it - which is why it is the single source of truth because there can only be one.   

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?  The App can only hold so much without looking like a hot mess, so it use it's child components to extend its state by passing that down with props.  App handles everything at once while the components may be asynchronous in how they handle state because sometimes they're not needed.  

4.  What is middleware? A virus.  Delete it.  ::  It is used to help the store understand what it needs to do.  Like outsourcing talent that is not readily available, locally.  axios, compose, redux-thunk, and redux-logger are middlewares.  

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?  ::  It helps extend the asynchonous behavior in the components and is very effective within actions because it will stop all of the http requests from being enacted too soon by looking at what is being dispatched and when/why those dispatches or exports are being called. 

6.  Which `react-redux` method links up our `components` with our `redux store`?  ::  connect, import it, export it, don't forget to curry it.