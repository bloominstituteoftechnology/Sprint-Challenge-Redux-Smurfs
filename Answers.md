1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 

map filter and find,   the spread opertor or Object assign allows us to extend properties. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 

actions will dispatch or use the dispatch method which will trigger a case in our reducer. The reducer will actually make the changes to state if need be. It is a single source of truth becaue the reducer is based on rules if a rule is not present no changes will be made. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other? 
 application state triggers down to every component. Component state lives only on that component.   Input paramaters maybe a good time to use component state however you could use refs so that you live only on the application state. 

1.  What is middleware? a hook into the moment after an action is dispatched and before the reducer runs. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?  

it lets you dispatch inside of an action creator and return a function from an action creator. 

1.  Which `react-redux` method links up our `components` with our `redux store`? 

connect 
