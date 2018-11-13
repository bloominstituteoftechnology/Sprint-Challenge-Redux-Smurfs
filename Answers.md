Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .reduce

.concate

Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: information that sends data to store reducers: describes the changes of state in actions(true, false, null) store: brings actions and reducers together. Allows state to be accessed and updated, also registers listeners.

What is the difference between Application state and Component state? When would be a good time to use one over the other?

application: global and any component can access it component: local and resides in specific component and can only be updated within that component and passed down to children by using props.

smaller vs larger projects?

What is middleware? looks at every action before going through store

Describe redux-thunk, what does it allow us to do? How does it change our action-creators? function returned by another function. looks at every action. makes actions actually do something.

Which react-redux method links up our components with our redux store? connect