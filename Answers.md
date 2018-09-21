1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object        while extending the properties of another object?
    map, filter, and reduce and we use map to create a a new object hile extending the properties.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known       as a 'single source of truth' in a redux application?
    the store is like the big brain of a memory card its the source of truth because everything goes to it. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state is global and compenent state is local. and we would use the application state if we need it globaly such as the "store" and compenent if we only want to update within the component and pass it down via props.

4.  What is middleware? 
    almost like a bridge from one database to another sometimes even applications and operating systems.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    its a middleware that lets us call and action creator instead of an action object. it makes the 
    action-creator more versital in the sense that it will dispatch if certian conditions are met or 
    maybe even delay the action.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    connect.
