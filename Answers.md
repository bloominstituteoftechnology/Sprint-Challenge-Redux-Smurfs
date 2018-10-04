1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- map, reduce, filter
- map

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- 'actions' are specific pre-defined actions that should take place at certain state definited in the finite state machine
- 'reducers' defines the specifics logics and modifications to the store state for each of the states defined in the finite state machine
- 'store' is the central state (store state)and logic (reducers) storage for the app.  It is known as a 'single source of truth' in a redux application because multiple files/components of the app can have direct read access to store state information

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
-  Application state should store information that is needed for multiple components (e.g. information fetched from server database), whereas component state should store information that only needed for the specific component (e.g. input text in an input field)

4.  What is middleware?
- a function or piece of computer codes that bridges between two other functions by processing the data of one function and pass the processed date to the next function

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- redux-thunk is middleware that is applied between the actions and reducer in a redux app.  It allows action creator to have direct access to the dispatch method of the redux store, which allows handling of asynchronous requests to the server

6.  Which `react-redux` method links up our `components` with our `redux store`?
- connect
