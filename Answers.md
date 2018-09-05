1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
## We extend the porperties of another object into a new brand one by using 'Object.assing()'
## Object.assig() can be used to with Arrays. => Object.assign( [...origianlArray], { indexOfArray: valueToUpdate } )
## For arrays we can keep the original inmutable applying the Array.concat(), Array.slice() and the ...spreed operator
## Also we can use Array.map(), Array.filter() and Array.reduce() methods.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
## Store => Is the instance tha holds the whole App's state.
## Reducer => Handles all events/actions that comes from the App into the store and update the App's state according to some rules based on the 'state of the whole App/Machine'.
## Action => Are any type of event/logic that has a direct effect on the state of the App. This events/logic travels form the core of the App to the guts of the 'store' landing either on a middlewear or a reducer.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
## An App is a composition/aggregations of several pieces assembled together in a harmonic way (...well, no always as harmonic as we pretend).
## We control the 'global' state, the global properties into our called 'store', from there we spreed that information into our App's pieces. this global properties are necesary as is the oxigen to our bodies.
## In the ohter hand, a Component/piece state, is a collection of properties that ""only"" concerns to this specific piece of the App. Our right hand donot mind wheter our left hand is holding a pencil or not, its own state is independent.
## ...but both, the right and the left hands, are concerned and affected by the global state: Is our body/App breathing?

1.  What is middleware?
## Is a technology that is infiltered into our App's store, from there they allow other instances out of the store's scope to hae access to the inner scope. This enhances our posibilities allowing us, for example, to catch/intercept 'actions' going into our store in order to apply new logic to this actions before dispatching a new action to our router(s), or to get detailed logs into the console from the guts of our store.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
## redux-thunk, allow us to have access to inner methods and properties of our store. It catch/intercept 'actions' going into our store in order to apply new logic to this actions before dispatching a new action to our router(s).

1.  Which `react-redux` method links up our `components` with our `redux store`?
## connect( mapStateToProps, { ...actions } )( component )
