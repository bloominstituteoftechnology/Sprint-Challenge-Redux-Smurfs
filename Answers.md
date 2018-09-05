1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
assign()
filter()
concat()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth'
 in a redux application?
  Actions delicate tasks for reducers implement and pass into the store to keep.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application is for global use in the App
Component is for local use in the file

1.  What is middleware?
 An extention used to invoke built in Redux methods at will.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? redux-thunk provides methods like dispatch() allowing asyncrynous functionality with our action creators

1.  Which `react-redux` method links up our `components` with our `redux store`?

StateToProps

