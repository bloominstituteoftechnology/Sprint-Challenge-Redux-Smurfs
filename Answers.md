1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

*    Three JavaScript Array/Object methods that do no produce side-effects are  filter, concat, and map. The method used to create a new object is object.assign. 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

*  An action essentially sends information and data from the application to the store. A reducer takes an action and provides an updated version of the state based on the information provided by the action. The store is known as the single source of truth because it's the one area that holds and stores all of the signifcant information about the state. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

*  The difference is that an Application State is immutable. The Changes that are made are merely clones or reflections of the state object without actually affecting the state object. A Component State is not immutable and is handled within the component A good time to use Application state over a componenent state is when information needs to be available outside of a given component and delegated to multiple componenets. 

4.  What is middleware?

*  Middleware allows actions to be dispatched, observed and changed before they are put in the store. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

*   Thunk is Redux middleware that lets you call action that return a function. It changes our action-creators by         Dispatching multiple action from a single action creator

6.  Which `react-redux` method links up our `components` with our `redux store`?

*   export default connect(mapStateToProps)(someContainer)


