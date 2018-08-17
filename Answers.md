1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

-filter, map, reduce

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions send actions to reducers which get sent to the store so that they can be used.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state is global, Component state is local. 

4.  What is middleware?

-connection between actions and reducers

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-Redux-thunk allows us to call async dispatch functions.

6.  Which `react-redux` method links up our `components` with our `redux store`?

The connect method links components to the redux store.