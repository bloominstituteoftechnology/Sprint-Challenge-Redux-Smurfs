1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign, Array.prototype.slice, Array.prototype.map; Object.assign creates a new object while extending the properties of another object.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions - groupings of information that shuttle between the application and the store
Reducers - transitions that change the application in response to actions
Store - holds and updates application state
The store is the one place where all of the properties that are shared by two or more components live, so it is the single source of truth.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the store from Redux, Component state is React state which lives inside a single component. For a list of friends that is retrieved from a server, use application state, for the boolean of whether a menu in a component is shown or hidden, use component state.
1.  What is middleware?
Middleware is software that bridges two things, and in the case of Redux, between the actions and reducers. It adds functionality like 'thunk' being able to make the actions return functions.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk is middleware that changes what you can do with your action creators. They can now be returning functions instead of objects. Thunk can delay dispatching and can dispatch based on conditions being met.
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()
