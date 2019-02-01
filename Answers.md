s1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
--.map, .concat, .filter; 
--Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
--Actions are objects that describe changes and the data associated with them. Reducers take the actions and deliver them to the store to change the current state. Store is where state is stored for the entire application. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
--Application state holds the state that can be accessed by all components in the application, whereas component state can only be accessed by that component and its children. A good time to use component state would be for form data that only applies to that component, such as a comment section. Application state would be best for a login state, where the user can be identified as 'logged in' over the entire app.

1.  What is middleware?
--a piece of software that extends or enhances another piece of software.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
--thunk allows us to run functions while that can access the dispatch method. It allows the action-creators to dispatch multiple actions depending on the response.

1.  Which `react-redux` method links up our `components` with our `redux store`?
--mapStateToProps and connect
