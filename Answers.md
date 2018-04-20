1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
`.filter`
`.map`
`.reduce`

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`Actions` - Objects serving minimalist representations of changes to data
`Reducers` - Calculate new versions of state based on current state and given Actions
`Store` - Holds the whole state tree of your application and it can be changed by dispatching an action to it -- 'single source of truth,' because the state of the entire application is stored in an object tree within a single store

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
When state is stored in a component in React, it has to be passed down through props when needing to be shared with other components. However, in Redux if state is stored globally in an app inside the store, any component can then obtain access to the store by 'subscribing.'

4.  What is middleware?
A powerful extension point for Redux which can add new functionality.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`Redux-thunk` is a middleware providing ability to handle asynchronous operations inside Action Creators. It also provides the ability to have your action creators return functions to dispatch() methods of Redux Store.

6.  Which `react-redux` method links up our `components` with our `redux store`?
`import { connect } from 'react-redux';`

7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?