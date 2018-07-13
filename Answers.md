1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map(), .concat, .filter() are the methods that do not produce side effects and
Object.assign() is the method used for created new objects with extended properties
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  The 'store' is the where the state for the entire application is held. actions
  are packets of information, they are the descriptions of the changes we will
  make to the state in our store as well as a container for the data associated
  with those changes. They are often described as "the thing that gets triggered"
  from human interaction with out website". Finally reducers are functions that
  calculate a new version for our state based on the current state and a given
  action. They are the glue that binds together stores and actions.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application state is the immutable, single source of truth contained in our
  store. It is used throughout the entire application and only used by creating
  copies of it and updating the copy and replacing the original with the copy
  we never directly modify the original state. Component state is "local" state
  that is specific to any given component and as such is available to any other
  part of the application except through the passing of props. As the scale of
  your project increases it is advisable to use application state over component
  state. Additionally component state is better for small changes within a single
  component  as opposed to an entire application.
4.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
