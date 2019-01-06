1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter, reduce

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions feed reducers actions so that the reducers can send them to the store for their functionality to be put into action.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global while Component state is local. 

1.  What is middleware?

bridge between the operating system of the application . 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our 
`action-creators`?

redux-thunk dispatches the action creators 

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect 
