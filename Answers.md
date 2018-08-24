1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

1a      array.map
        array.concatreduce
        array.filter

2a. The spread operator... for example return {...state, gettingSmurfs: true};, to copy in everything from state and possibly set a property




2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    2a. Reducers: Take in some state, the changes that took place and return the state.

    2b.Actions: Information that contain an action type and some data that we want associated with that action type.

    2c.store: All changes are held by a a single JavaScript Object known as the store.
     The store contains our state for our application.

     Store sets the state -> 
            Actions tell us something changed -> 
                    Reducers handle those actions and replace the store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    3a. I see application state as the global state, and component as the the local state, 
    application state would be best when you have to pass a lot of props between parent and child components, 
    where local may just be needed in the case of a form submission


4.  What is middleware?

    4a. Middleware in the case of redux would manage an asychronous action before handing off to a synchronous operation

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    5a. "Thunk"  is a middleware component, that allows for the performing of asyncronous operations prior t handing off to the reducers
    5b. allows the action creeators to return a function instead of just a plain object


6.  Which `react-redux` method links up our `components` with our `redux store`?

    6a. Connect provides the props to the component in which it is defined