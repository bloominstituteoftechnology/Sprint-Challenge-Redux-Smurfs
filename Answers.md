1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
*Three Javascript Array/Object methods that do not produce side-effects are `.map()`, `.filter()`,`.concat()`. We can use `Object.assign()` if we want to creates a brand new object and  adds new key/value pairs/extend the properties of another object.*

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
*`actions` in Redux are the packets of information, usually an object, that contain an action type and a "payload" that contains some data for that action type. The`reducers` handle those actions and replace the store accordingly; reducers are pure functions. The `store` is a single JavaScript Object that contains our state for our application; the `store` is the single source of truth in the application in that when we make changes to our state object, we do not write over or mutate the original state object directly, but we copy the state object, modify the copy, and replace the original state with the new copy.*

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
*Application Sttate can be considered "global" state that all subordinate components can access, whereas Component State is local state restricted to a single component and cannot be accessed outside of the component*

1.  What is middleware?
*Middleware is software glue that enables us to connect bits of software together easily; middleware allows us to intercept or intervene in processes and allow processes to continue or not*

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
*When an action creator is called, redux-thunk will intercept and look at what is returned. If the thing returned is an action, it will forward the action through to the reducer. But, if the thing returned is a function, aka a thunk (a function returned from a function), then it will invoke that function and pass in the dispatch function as an argument to it. In essence, it's like we can chain actions together*

1.  Which `react-redux` method links up our `components` with our `redux store`?
*`connect` links up our components with the `redux store`*
