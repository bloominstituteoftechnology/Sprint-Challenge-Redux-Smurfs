1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

--> 3 JavaScript Array/Object methods that do not produce side-effects are:
1) .map (iterates over an array/object and displays data without changing the data mapped)
2) .concat (joins two arrays/objects together into one for display or assignment to a variable)
3) .filter (iterates over an array/object with a filter --> if it passes the conditions, it iterates, if not, ignores)

To create a new object while extending the properties of another object, we use Object.assign().

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

--> Actions defined what actions can be taken within the redux store, reducers interpret those actions to make changes to the state tree and the store is the collection that houses all the data.  The store is known as a single source of truth in a redux application because all the components can be given access to the store, the single source of truth.  This can be done in simple React but has to be passed on as props to each component.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

--> Application state would be something like the store, where the whole application has access to updating the state.  Component level state is when a specific parent component has access to data and can pass on data to child components via props.  It depends on the application and its purpose, but application level state could house all the data to be rendered while login credentials for example could be housed on Component level state.  That way the component checks to see if the user is logged in, giving access to the Application level state.

1.  What is middleware?

--> Middleware is code-based extensions added to Redux to improve/widen scope of its functionality.  For example, we need thunk as middleware in order to do things like return functions from functions (using dispatch as an argument and using it within the function).

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

--> redux-thunk is is a middleware node package that can be used to allow asynchronous data flow from API calls. This modifies our action-creators so that the action creator returns a thunk, and that thunk has access to the dispatch function.  Depending on the return of that thunk and how its interpreted by the dispatch function (.then, .catch), it dispatches an action accordingly.

1.  Which `react-redux` method links up our `components` with our `redux store`?

--> The react-redux method that links our components up with the redux store is createStore.  You then also want to wrap the app component within a <Provider> tag with the store as a listed prop so the wrapped app component has access to the store.