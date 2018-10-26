1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    -Map Method
    -Reduce Method
    -Filter Method
    -we use Object.create to create anew object and extend the properties of an existing object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -actions: description of changes, and associated data that need to be made on the application state.
    -reducers: pure functions that does not mutate state object but creates a clone and replaces & updates in response to actions dispatch
    -store: in redux the state of the application (and the global state) is held within store. It's known as the "single source of truth" for this reason, all the data comes from it as a single source.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -Application state is main point of redux. A centralized location, (the above mentioned store) where the state of an application is kept.
    -Component state is when state is kept in the particular component (like what we did with just React).
    -A good time to use one over the other is when we have very large applications and it makes it easier/better to have all our state in one centralized area (the store) or,
    I suppose, when we wouldn't want certain state accessed by certain components so we want to set as component state so only certain components access it.

4.  What is middleware?
    -middleware acts as a bridge to the api and application, like "software glue" is the best analogy I could find to decribe it.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -redux-thunk allows us to make asynchronus requests since Redux is synchronous by default.
    -it changes our action-creators allowing those aschynchronous operations with actions.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    the connect method.
