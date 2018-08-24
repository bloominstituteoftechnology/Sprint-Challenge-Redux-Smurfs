1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?    'map reduce and filter'


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are pieces of data (payload) sent from your app to the store and it's the omly source of info for the store

Reducers are how you affect state changes in response to the triggered actions

the store is the centralized container that holds all state' referred to as the single source of truth, the store makes mananging state on a larger scale a lot more manageable

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

your applicaation state is global (the entire app) and your component state is local (your login form)

4.  What is middleware?

Are various libraries or softwear that acts like a bridge between the database and the app


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

allows us to write actions that return a function (dispatch)

6.  Which `react-redux` method links up our `components` with our `redux store`?

connect
