## Self-Study

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

for Arrays: `.map`, `.reduce`, `.filter`
for Objects: `Object.assign`, `Object.create`

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

State is a minimal representation of the data in an app. The only way to alter the data in the UI is to dispatch an action which will change state w/in the reducer.

Actions are objects that serve as minimal representations of the changes to the data. 

Reducers are functions that calculate the next state tree based on the previous state tree and the action being dispatched.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

In React, when state is stored w/in a component, it must be passed down through props when it needs to be shared with other components. i.e. The top-most/parent component in an app needs access to a mutable value that's held in its state, and can be mutated by child components w/ callbacks.

In Redux, when state is stored globally w/in an application in what's known as the store, any component that needs access to the state may "subscribe" to the store.


4. What is middleware?

Middleware provides a point between dispatching an action and the moment it reaches the reducer. It's used for routing,logging, crash reporting, asynchronous API calls, and more.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is middleware that lets one write action creators that return a function instead of an action. It can be used to delay an action's dispatch, or dispatch only if certain conditions are met. The function receives the store methods dispatch and getState as parameters.

6. Which `react-redux` method links up our `components` with our `redux store`?

import { connect } from 'react-redux';