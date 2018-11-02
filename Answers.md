1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?  
<!-- .concat, .filter & .map  -->
Which method do we use to create a new object while extending the properties of another object?
<!-- {...example} -->
2.  Describe `actions` and their role in Redux. What does each piece do? 
<!-- payloads that send data from application to the store. -->
 `reducers`and their role in Redux. What does each piece do? 
 <!-- Specify how states change. -->
  and the `store`and their role in Redux. What does each piece do? 
  <!-- Merges actions and reducers in. It holds applications, allows state to be updated & registers listeners. -->
 Why is the store known as a 'single source of truth' in a redux application?
 <!-- Controllable components -->
3.  What is the difference between Application state and Component state?
<!--Application state is global and immutable, while Component state is local and mutable. -->
 When would be a good time to use one over the other?
 <!-- Components are good for interactive applications.  Application state is good for modifiying the store object. -->
4.  What is middleware?
<!--Provides an interact with actions that have been dispatched to the store before they reach the store's reducer.
 -->
5.  Describe `redux-thunk`, what does it allow us to do? 
<!--  Thunk is the Redux middleware that lets you call action that return a function. -->
How does it change our `action-creators`?
<!-- Dispatches multiple action from a single action creator. -->
6.  Which `react-redux` method links up our `components` with our `redux store`?
<!-- Provider -->
