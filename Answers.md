1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
array.filter, array.map, Object.assign.   Object.assign is the method we use to extend the properties of another object.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is the immutable object tree that holds the state. The store is known as the single source of truth, because it holds the main app state for other components to read from with props.
the actions are responsible for the information/data that is sent to the store.
the reducers update the state according to what they are told by the actions.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state holds the overall state of the application (e.g. user profile, whether someone is logged in, etc) and component state is responsible for info that component needs to function (e.g. form values)
1.  What is middleware?
middleware is the code that takes in an action, processes it in someway, and send it on to the reducer afterward so the state can be updated.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 thunk allows us to run asynchronous code inside of redux, which is primarily synchronous. it changes the flow of redux, so that functions can be run before the state is updated.
1.  Which `react-redux` method links up our `components` with our `redux store`?
     connect
