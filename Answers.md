1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
reduce, map, and object.assign. Object.assign makes a new object with the old properties and then we can add some new stuff.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Store handles everything state wise for the entire application. Store is known as the single source of truth because it is the heart of the application. State either comes from the store or goes there. Actions are functions that return objects and reducers are functions that take the actions and do something with them and then return us our new object. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state lives just in the component where as application state is available to the enite application. If data is needed in multiple places application state is the place to be. If data is needed by one component or it's children then component state should do it. 

4.  What is middleware?

Middleware is a library that the actions go through before hitting the reducers. Middleware is like the gate keeper deciding how or if the action should go to the reducer. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Reduc-thunk allows us to program async redux.

6.  Which `react-redux` method links up our `components` with our `redux store`?
Connect is the business by way of mapToStorProps. 