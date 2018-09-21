1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  -- assign // forEach // map
  --Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    --Actions tell the reducer what to do and when
    --Reducers listen to the action and perform a change to information based on predefined triggers
    --Store holds information. It is known as a single source of truth because it can be passed to all components and when it is changed, all components that can read the store know about it.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    --App state is global whereas component is only for that component(unless passed to other components)
    --You can use component state when few thing needs access to that information. If many components need access to the same information, app state is better.

1.  What is middleware?
    --Actions flow through middleware before going to reducers to allow asynchronous api calls

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    --Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object

1.  Which `react-redux` method links up our `components` with our `redux store`?
    --Connect
