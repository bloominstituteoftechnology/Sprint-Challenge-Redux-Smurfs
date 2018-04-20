1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    - Object.assign
    - filter
    - concat

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - Actions: functions that fetch and display data from our server
    - Reducers: link the actions to our store
    - Store: where our information is stored to be fetched

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    - Application state is used for large scale projects to store lots of data
    - Component state is used on smaller scales in the App.js

4.  What is middleware?

    - Middleware is needed to give your store the ability to dispatch

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    - Redux-thunk is what gives us the ability to use the different actions

6.  Which `react-redux` method links up our `components` with our `redux store`?

    - mapStateToProps links our components to our store

7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?
