1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    The three methods that do not create side effects/results are map, filter,concat and they all work by returning replicas of our original array with the added implementation of the method. Object.assign is used to create a new object in which we can store data from previous state, or other objects.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
     Store- in object form, is the centralized base for all of our applications state.
    Action- Provide a type(condition), in which our state reacts to if met.
    Reducer - Change state based on the actions it is provided.

    Everything 'connects' to the store and is modifying data within that as opposed to moving the datat around and modifying it.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

       Component state is passed down in a heirarichal fashion using props, and must be continued to be passed down to which ever lowest level component uses it. Application state is set up in a centralized store and can be connected to any component using a connect method. This allows is to only give state to those pieces of our application that need it.

1.  What is middleware?
        Code that we can add to our store that interacts with our code between our actions and reducers,allowing increased functionality.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        Thunk allows us to deal with asynchronous calls inside of our actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?
        Connect yo
