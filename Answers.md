1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?

.filter, .map, and .reduce do not produce any side effects.

Which method do we use to create a new object while extending the properties of another object?

Object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?

ACTIONS - packets of information that describe the changes that will happen in the application,as well as the data associated with those changes.
REDUCERS - will determine what the new state of the application looks like based off of the current state and whatever Action they are given.

Why is the store known as a 'single source of truth' in a redux application?

The store contains the original version of state, and it is never changed in any way. It is used by the rest of redux (actions and reducers) to make the application work when a user interacts with it.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and can be accessed by any component in the app. Component state is local, which means it is used only by the Component that contains it, is updated inside that component, and can be passed as props. A good time to use Component state might be when you have short-term data that is going to change rapidly (like data in a form that is going to be submitted).

4.  What is middleware?

Middleware is an extension for REdux that allows for a little more control over the flow of an app. Middleware can stop an action, dispatch a different action, or dispatch multiple actions. It can also allow actions through without doing anything to them.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows for asynchronous operators insinde the action creators in our app. Functions can be returned from the action creators, and the function can dispatch the actions at a later time (asynchronouly), as opposed to immediately (synchronously).

6.  Which `react-redux` method links up our `components` with our `redux store`? connect()()
