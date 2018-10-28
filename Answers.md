1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

3 Javascript Array/Object methods that do not produce side-effects: 
  1. Array.concat() can be used to add to an array without mutating the original (assign concat to new array with array1's properties).
  2. We can use array.filter() to remove items (it returns a new array). 
  3. Array.map () can be used to create a new array that replaces items that match a specific criteria. 

The spread operator (...) can be used to create a new object while extending the properties of another object. 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The "store" holds the state for the entire application. This is what is referred to as "the single source of truth" because it is this state where all the meaningful data is stored and interacted with. "Actions" are what send data from the application to the store. They are the source of information to the store and are sent using store.dispatch(). "Reducers" take in actions and then dictate how the application's state changes in response to these actions. So the actions describe what happened and the reducers dictate how that then changes the store's state. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is for all the meaningful data that the application is using to run (API state, adding a blog post, deleting an item, etc.). Component state is only visible and concerned with the component it lives in. This should only have state for minor things (a current flag, or an input field). I had this same question earlier in the week and in my research Dan Abramov suggest to do what is "less confusing" but strongly encourages keeping all state in the Redux State Tree to take advantage of the single source of truth but state in components is fine if it makes things less confusing. 

4.  What is middleware?

Middleware allows us to modify actions before they get to reducers. This allows for things like asynchronous calls. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

'redux-thunk' has a saved reference to the stores dispatch method that gets passed to the returned function of the action creator, this lets our action creators perform asynchronous calls when necessary as opposed to having to build that into our components. 

6.  Which `react-redux` method links up our `components` with our `redux store`?

"Connect" links our components to our redux store. It is used to give our components state through their props from the store and also to give them the action-creators necessary to make them re-render as needed. 
