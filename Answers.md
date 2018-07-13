1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
Object.assign creates the new object while extending properties of original
.map  does not change the original and does not produce side effects it makes a copy of the original
 .filter also does not prodcue side effects

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state is a state that exists only in a component. Application state is held in redux store and can be accessed by more then one component so it would be good to use when data is needed by many components.

1.  What is middleware?

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

1.  Which `react-redux` method links up our `components` with our `redux store`?
The connect method
