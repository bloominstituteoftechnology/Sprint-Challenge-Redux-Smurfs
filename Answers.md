1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map, Concat & Filter
    Object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions - Actions are plain JavaScript objects & have a 'type' property. In Redux the payloads of information will send data from your application to your store.
    Reducers - Is a pure fucntion that takes the previous state & an action and returns to the next state. In Redux it specifies how the application's state changes in response to actions sent to the store.
    Store - Has the responsibility of holding application state, allowing access to state, allowing state to be updated, registering listeners & handling the unregistering of listeners. In Redux it is the object that brings the actions & reducers together.
    Due to the Store's abilities & responsilbilites, it is often known as a 'single source of truth' in a Redux application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Component state is stored locally within the React component whereas Application state is global.
    Figure out the duration of time in which each piece of state needs to persist for. If it is short, Component state is good. For anything longer, Redux states or other methods may work better.

4.  What is middleware?
    It is used in Redux for providing asynchronous API calls. It does so by providing a 3rd party extension point between dispatching an action, and the moment it reaches the reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    It is a library that allows us to write action creators that return a function instead of an action. 
    We utilize it to delay the dispatch of an action or to dispatch only when certain conditions are meet.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect

7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?