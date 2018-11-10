1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Concat, map, and filter. We can use the spread operator (...) to extend the properties of one object on to another.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are pretty aptly named, they describe what happened. That action is a source of information (payload) that is sent to the store. The store is what holds the state of our application, and that's probably why it's known as the 'single source of truth'. In our store is the reducer, which processes how are state is going to change in response to actions.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state only lives on a specific component. If you want to pass that state around then you need to do that using props. Application state is accessible anywhere in our application if we use the proper methods to access it.

4.  What is middleware?
Middleware is an extension that lives between when an action is dispatched and before it reaches the reducer. It lets us do aynchronous calls (thunk), log stuff (logger), and other fancy stuff.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
By themselves, actions can't really do a whole lot since they are just objects. Redux-thunk is middleware that let's us return functions in those objects. That way we can use the dispatch() method to make axios requests and make our lives a whole lot better.

6.  Which `react-redux` method links up our `components` with our `redux store`?
connect(mapDispatchToProps, { actionsGoHere })(ComponentNameGoesHere)
