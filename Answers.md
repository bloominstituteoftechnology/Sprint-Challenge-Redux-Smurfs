1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    map, reduce and filer.
    Object.assign() creates a new object while extending properties.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions - Are objecs and is utilized to change state and describes what has changed in the state but now how.
    Recuders - Are pure functions and this specifies how to change state.  They are reusable and can be broken down into smaller and smaller parts as needed.  The important thing to remember is they need to be immutable so the original data doesn't change.
    Store - Is just one store and contains state rather than having state all over.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Redux manages the App state which is stored globally.  Tracking changes to state is important.
    Component state is stored locally and is passed down as props with other components.

1.  What is middleware?
    Middleware takes information before that information heads to 'reducers'.  Middleware extends the use of a package and handles asynchronous requests.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is a node package and allows the action creators return functions.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect.

1. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?