1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign() duplicates an object/array. can also be used with ES6 syntax and spread operators.

This is also used for adding and changing existing properties when creating a new copy of the existing object.

Array.prototype.map
Array.prototype.filter

Both of the above will return brand new arrays insted of mutating the existing ones.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The `store` is where the state of the application is held.
`actions` are objects with instructions on what needs to be done.
`reducers` are what make the changes to the state according to the instructions from the `actions`

The store is the singel source of truth because you do not want to be managing the application state in multiple locations. It needs to be held is only one location that all components can access.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state should be the first goto. Add data that is needed in more then one component should be stored in the Application state located in the store.

Component state is for `temproary` items that are needed ONLY in the one component. Should be used for holding data that is being worked on, then transmitted to the Application state once ready to be committed. i.e., Holding input field values on the component, to be sent to the state as a new object once combined into one object/array.

4.  What is middleware?

Middleware are frameworks that will be executed between the actions and the reducers.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` allows async actions to be performed, then actions to be dispatched once processing is complete. Used for axios/HTTP requests. Action-creators now return functions instead of objects.

6.  Which `react-redux` method links up our `components` with our `redux store`?

import { connect } from './react-redux';

export default connect(mapStatToProps, {action, action2, action3})(componentName)

this allows the Application state to be accesses from the component as props. It tell react-redux what slice of the state is needed in this component, so the component can be rerendered when that slice of the state changes.
