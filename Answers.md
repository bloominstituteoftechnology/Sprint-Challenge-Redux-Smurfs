1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter, .map, & .reduce

Object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`Actions` are informational packets that get trigerred by human interactions on your webstie. Users trigger actions. An action is just a function that returns an object and keep interactions as simple as possible.

Actions flow through `reducers`. They take in the state and an action. The actions gives a type, which tells the reducer what to do, and a payload that signifires what needs to be updated on the state.

The `store` contains the state, at all times, of the application. Everything that changes in the app will be in a single store object.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is something that never changes. We always clone the state object and then modify and update the clone. Component state is what we use in React without Redux. The setState() method schedules and update to the component's state object and trigers the component to re-render.

4.  What is middleware?

Middleware extends the functionality of Redux by intercepting every action BEFORE it flows through reducers. It can stop actions, forward an action untouched, dispatch a different action, or dispatch multiple actions. Since reducers are synchronous (by default) was can use middleware to perform actions asynchronously (like to handle asynchronous requests). 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`Redux-thunk` is a middleware that can hanlde asynchronous operations. It provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux Store.

6.  Which `react-redux` method links up our `components` with our `redux store`?

`connect()()`
