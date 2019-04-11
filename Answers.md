1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
 - Array.concat() - Array.map() - Array.filter()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`actions` - when an action is performed, the action type will convey to the reducer and determine how to change the state by creating a copy, modifying it from the copy which previously had the original state on it.

`reducers` - a reducers' responsibility is mainly to determine how the state should be changed and what that will look like.

`store` - the store contains an object tree, every aspect about the application is determined here. Dispatching an action is the only way to affect the state inside of the store and as mentioned above, that's done with a copy, not from modifying the original.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
`Application-state` is global and Component State is local to that component and can not be seen outside said component.

4.  What is middleware?
`Middleware` is software that allows separate programs to share data and communicate.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`Redux-thunk` is a way to dispatch asynchornous change from one state to another. It is a part of middleware and looks for actions that are functions.

6.  Which `react-redux` method links up our `components` with our `redux store`?
The method that allows us to link up our components with our store is 'connect'.