1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
A: `Array.concat()`, `Array.map()` & `Array.filter()`. We would use Object.assign().

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A: Actions describe the type of changes that will be taking place, as well as the data associated with those changes. Reducers take in two arguments, the current/previous state that they represent, and the action object that is sent to them via the action creator functions. Reducer takes what it just learned from Action about the change, and then acts as the brains, interpreting what it is about the store that will be changed. It then creates a copy of the original store and modifies that copy based on the new changes. This changed copy then replaces the original. Everything that changes within your application will be represented by a single JavaScript Object known as the store. The store contains our state for our application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
A: Your application state is global, and your component state is local.

4.  What is middleware?
A: Middleware intercepts actions before they get to reducers. This allows asynchronous tasks to complete and return the relevant data before continuing.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A: Redux Thunk is a separate node package called redux-thunk. It provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux Store.

6.  Which `react-redux` method links up our `components` with our `redux store`?
A: mapStateToProps();