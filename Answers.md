1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Since es6 the addition of functional programming paradigms into JavaScript have allowed for pure functions which execute without side effects, that is given the same input they always return the same output (one-one and onto) and they do not mutate the data, print or console log, manipulate the dom, make any requests, artificially truncate the runtime, or use random numbers, such as:
  - Object.freeze()
  -Object.seal()
  -Object.isFrozen()

  You can use Object.assign( ) to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-action are what transform the  state by passing the state "type" and potentially also a payload, which is the data being passed.
-reducers are essentially listeners that trigger the action calls and and add information to the state
-store is where the reducers are stored so each component can have access to the actions without needing props to be explicity passed into each component. Thus this is the single source of truth as there is only one proccess throgh which information can be added or removed from the state. Store is technically the application state for redux.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
The difference is the scope, the application state is essentially the entire data of the application, whereas the component state only tracks the state of the component. It would be advantageous to use component state when you wish to separate concerns and pass the props only to certain children as opposed to letting the  entire application see what's inside a single component's state. 
1.  What is middleware?
middleware gives redux application the ability to better handle the incoming requests and generate the response by creating a third party extension point between dispatching an action and the moment the action reaches the reducer.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
actions are objects, they are expected in fact to be just objects, but if we want the actions to do something we want them to be functions, so in comes thunk which is a middleware that examines  (by taking in dispatch and getState) all the actions being passed within the application and determines if one is a function, it calls that function.
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect.
