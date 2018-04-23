1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    1. getElementById
    2. objectName
    3. objectName.methodName
    4. Object.assign.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    1. Actions send data from your payload to your store. They are the only info in your store
    2. Reducers specify the states change in response to the actions sent to the store.
    3. The store holds the entire state tree/ the only way to change state inside it is to dispatch an action.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    1. application state is global, and your component state is local. Use component state when you want to change the state of that specific component rather than the app itself.
1.  What is middleware?
    1. Code you can put between the framework receiving a request, and the framework generating a response
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    1. It allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    1. connect
    
1. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?