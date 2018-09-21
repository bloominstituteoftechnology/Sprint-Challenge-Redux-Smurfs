1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

Answers

1. Object.assign, spread version syntax, this setState.

2.Actions call (or 'flag') the case in the reducer and will deliver a payload to the reducer. The reducer is the only real way to alter the apps state, it's basically a big ifStatement that cases that get flagged if the actions call it. The store holds the apps state, it's the single source of truth because it the only place the data is stored and it gets updated via the reducer.

2. Application state is the where the main/parent data is held at and can be passed down to the components. Component data is data that is only used in the component and the App will not be aware of.

3. If Redux is basically one big loop of action, middleware lets you break off of the main loop into your own little loop so you don't disrupte the main loop. So instead of waiting for an API call to be returned, you can load otherthings on your page while that API data is getting called.

4. Redux-Thunk is middleware that lets us call a string of functions that we usually use to dispatch a series of actions.

5. Connect lets us "connect" our components to the redux store.
