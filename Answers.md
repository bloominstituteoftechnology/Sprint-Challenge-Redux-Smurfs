### Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

* Map
  The array method `map` iterates over each element in an array and calls a callback function passed to it, but returns the results into a new array, thus leaving the old array intact. Remember that if objects (*i.e. reference types*) happen to be the elements in the array, you may need to do additional things to prevent mutation, such as using `Object.assign` or the spread operator to ensure you populate the new array with totally new objects instead of references to the old ones.
* Filter
  The array method `filter` returns a new array, filled with elements from the old array which passes the test provided by the callback function passed to it. Again, the old array remains intact, and the what is returned by `filter` is a new array. 
* Object.assign
  Object.assign transfers properties from one more objects and sticks it into a new object. This object method is important for immutable transformations of objects, because objects are reference types, so unlike primitives, you may be handling a "reference" or an "address" of where that specific object lives, so instead of changing what you think is a different object, you are changing the original object through reference. `Object.assign` assures you are making a new object distinct from the old one.

### Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`actions` are the results of user interactions or other events in the application. It's a signal that will be sent to the reducers which contains the type of action, which determines the type of logic the reducers will transform the state, and a payload if there's any data the reducers need to transform the state, like inputted form data.

`reducers` are part of the store and are the mechanisms which the store changes states. `reducers` accept the action object, and based on the action, construct a new version of how the state should look like. 
### What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state of the entire application (*i.e. global state*), while component state is the state local to that specific component. According to the article [React State vs Redux State: When and Why? by Tyler Hoffman](https://spin.atomicobject.com/2017/06/07/react-state-vs-redux-state/), he argues that short-term fast-changing state should be stored in component state. In the Smurf application I worked on today, that would be something like input typed into the forms to add and update Smurfs, as that data changes rapidly between keystrokes.

In contrast, medium-term data should be stored within application/Redux state. That would be like the collection of Smurfs to be displayed, or the "loading" state of the application.

### What is middleware?

### Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Middleware is code that can be wedged between the actions and reducers to add additional functionality. This week, we used "thunk" to catch a dispatch in progress. By using "thunk", we can do asynchronous operations.

We are able to do that because "thunk" allows us to catch and control the dispatch method from the store object. In `react-redux`, the dispatch is handled automatically, and the action creators are basically action object instantiators the dispatch will use. With "thunk", we can tell dispatch to "HOLD IT for a sec", and make the sending out of the action object to the reducers contingent on the resolution of an asynchronous operation (e.g. Promises, axios/AJAX requests, whatever).


### Which `react-redux` method links up our `components` with our `redux store`?

`connect`
