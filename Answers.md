<!-- 1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? -->

Object.assign(), Array.filter(), Array.map(). 
Object.assign() allows us to extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are packs of information that contain Action type and optional payload.
    Reducers specify how the application's state changes in response to actions sent to the store. 
    The store contains our state for our application

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
