1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- Filter: Returns an array of elements that meet, or do not meet the criteria given to the callback function.
- Map: Returns an array of elements that have been effected according to the callback function given.
- Concat: Returns an array containing the original array object elements, and the elements of the array object added to it.
- The method used to create a new object while extending the properties of another is Object.assign.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions: Objects which contain the type of action that took place, along with the result of that action as a parameter that links to a reducer.
- reducers: Reducers are pure functions that carry out the actions that a specific action object correlates to.
- store: The store is a state object that exists outside of the application state, parts of which can be delegated to the components that require it.
- The store is known as the single source of truth because it holds all of the information about the state of the app, so that components don't have to pass state to eachother,
  but can receive it from the store whenever it's needed.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- The difference is that component state can allow for each individual component to "hold" and alter it's state, and potentially the state of other connected components.
  Application state allows for removal of most of the state from components, and allows for easier state management in larger applications, as it's only held in one place/object.
1.  What is middleware?
 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
