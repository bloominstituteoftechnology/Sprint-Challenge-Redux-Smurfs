1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- Array.map
- Array.filter
- Array.concat
- Object.assign (
    param1: creates a new target object, 
    param2-...: extends properties from another object
    )
   

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- `Actions` are functions that fire on user events that communicate what you want to be done and any data along with it.
- `Reducers` are pure functions that take an action and the previous state and then handle the appropriate response without mutating the original state. 
- `Store` is the feature in redux where state is acted upon and contains the history of state.
- The store is the single source of truth because every piece of state is held in one place as opposed to on the individual component level.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- `Application state` is accessible by the whole application and managed by the store. It is useful for more complex states or data that needs to be used by multiple components. 
- `Component state` lives within a single component (the data of which can be passed down to its children as a prop). This is useful if this state will be used by that component alone (a good example of this is storing form data).


4.  What is middleware?
- `Middleware` is a third-party extension that has an effect before the action dispatches. Common uses are logging, routing, and making asynchronous API calls.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- `Redux-thunk` is a middleware that allows action creators to return a function. This opens up the possibilities of extra logic or asycn API calls before a dispatch.


6.  Which `react-redux` method links up our `components` with our `redux store`?
- `Connect()` ties a component with the redux store.