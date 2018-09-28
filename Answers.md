1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?
    .filter, .map, and .reduce do not produce any side effects.
    Which method do we use to create a new object while extending the properties of another object? Object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? STORE - contains the state for the application, and is never changed (rather it is cloned, and the clone is then modified, and then state becomes replaced by the new copy).
    ACTIONS - are packets of information that describe the changes that will happen in the application, as well as the data associated with those changes.  
    REDUCERS - will determine what the new state of the application looks like based off of the current state and whatever Action they are given.
    Why is the store known as a 'single source of truth' in a redux application?
    The store contains the original version of state, and it is never changed in any way. It is used by the rest of redux (acitons and reducers) to make the application work when a user interacts with it.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is global, and can be accessed by any component in the app can use it.
    Component state is local, which means it is used only by the Component that contains it, is updated inside that component, and can be passed as props.

4.  What is middleware?
    Middleware is an extension for Redux that allows for a little more control over the flow of an app. Middleware can stop an action, dispatch a different action, or dispatch multiple action. It can also allow actions through without doing anything to them.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is a middleware that allows for asynchronous operators inside the action creators in our app. Functions can be returned from the action creators, and the function can dispatch the actions at a later time (asynchronously), as opposed to immediately (synchronously).

6.  Which `react-redux` method links up our `components` with our `redux store`?
    connect()()
