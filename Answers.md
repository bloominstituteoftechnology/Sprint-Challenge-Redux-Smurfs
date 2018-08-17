1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.concat() .map() .filter Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are plain objects emmited by an action creator function. They carry information to the reducer(s) which then modifies the state. The state is a data structure that resdies in the store, the store is our single repository for all of our applications data as well as some imortant methods for permitting that data to change and thus update the vue of the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is where all of our important information will be kept. Component states will be used for UI conveniences. Booleans for flipping the visibility of rendered elements or for controlling an input, for example.

1.  What is middleware?

Some logic our actions will pass through before they hit the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk permits us to give asynchronous instructions to our application. Simply put it makes our action-creators more complex.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect();
