## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- Object.assign();
- {...objectgoeshere}; (spread operator)
- const mergedArray = array.concat(arrayU)

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions - are payloads of information that are dispatched to the store.
- reducers - Reducers are functions that listen for specific signals from the application. When their name is called, or that signal is dispatched, they capture information and inject it into the state. They do this by adding to the existing state. They do not remove information. 
- store - is a single object that holds the state in what we call the state tree object.

- the store is known as the 'single source of truth' in Redux because the state tree is is indirectly immutable.  The one way directional pattern insures that there are no changes to the state directly and the reducers serve as gate keepers to the source of truth.  You can only change the state indirectly by using a method such as {...objectHere} to copy the state object and then change that copy. 


2.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is the state tree object that can be accessed anywhere within the application.

- Component state is stored in each component, it can only be accessed by passing the data down manually.

- App state is used when many components need to access the state.  If you only need state for a single component then that's where single component state comes in handy.

3.  What is middleware?

- Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

4.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.


5.  Which `react-redux` method links up our `components` with our `redux store`?

 - ```import { Connect } from 'react-redux';```

6. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?
