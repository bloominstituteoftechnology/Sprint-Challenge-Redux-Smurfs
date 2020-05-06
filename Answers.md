1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

1 .map, .filter, .reduce, Object.assign()
2. Actions - The how and what, reducers - take our action and hold state individually, store - hold the state.
3. Application state is global and component state is local. any component can get access to it as long they “connect” while component state only passes down children.
Application is good for large team while component state benefit for smaller projects.
4. a bridge between applications.
5. a middleware that can make our action asychronous.
6. {connect}