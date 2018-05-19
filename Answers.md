1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign creates a new object and assigns it keys and values based on the other objects its given as arguments
Array.map creates a new array whose contents are returned from map's callback function
Array.filter creates a new array whose contents are those of the original array for which the callback function returned true

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are signals to the reducer - they fire off objects with a type and a payload, which the reducer handles based on their type.  Actions can be more complex if using middleware - for example, with Thunk actions are functions that use dispatch to fire off those same action objects.  
Reducers are functions which know what to do about an action.  They non-mutatively create a new state from the old one and update it in the store using the rules for the action that triggered the update.  
The store is where redux keeps its stuff.  We can gain access to it in components using connect and mapStateToProps.  
The store is known as the single source of truth since it's accessible throughout the application and can be used to store everything.  

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is universal and kept in the redux store.  Component state is an object kept on a class component - it's only available to that component and any that you make the effort to pass it down to.  It makes sense to use if you have a information that needs to be stored but only needs to be accessible to one component.  For example, the current value of an input field could be stored on a form component until it is ready to submit, at which point it can become the payload of an action.

1.  What is middleware?
Middleware sits between the actions and the reducer, intercepts those actions, and does something with them.  Of the two middlewares we've used, logger doesn't change behavior or form of actions but console.logs all kinds of information whenever an action passes its way.  Thunk, on the other hand, expects actions to arrive as functions, and it feeds them dispatch as a callback so they can send action objects to the reducer.  

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
I described some of what thunk does above; the actual purpose of this is that we can have one action creator send multiple action objects to the reducer over time.  For example both before and after a promise is fulfilled.  

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect and its callback which is conventionally called mapStateToProps take care of this.  
