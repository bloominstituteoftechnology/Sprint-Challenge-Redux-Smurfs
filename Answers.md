1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Object.assign, map, slice, and the spread operator '...'.  the spread operator is what we use to create a new object or array while extending the properties of another object or array.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        store is a single source of truth because it allows us to create a single state that can be shared across the components in an application.  without redux and store, our states would be less organized and spread between more components.  actions are objects that we send to the reducer that tell the reducer how to manage the incoming information.  the reducer matches filters the action to its appropriate case which then updates the state accordingly.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

        application state is a state that is consolidated into one place for the application.  component state is state stored on the individual components.  when applications scale up in size, it is often useful to use application state.  however, even in a project with application state management, often some component states are still viable.  one example of this is component state for form inputs, but the state for what those forms actually submit would still be at the application level.

1.  What is middleware?

        middleware is something that can process information between the actions and the reducer.  in our examples we used middleware to allow us to put function calls into our actions.  the middleware then stands between the action and reducer to interperet how to handle the actions accordingly.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        redux-thunk is middleware that allows us to have functions returned from our action creators.  this checks the actions that are dispatched to see if they require 'special treatment'.  if they do not, they actions go through the normal process. if they do, then redux-thunk then does some 'black-magic' to allow us to pass those functions through the action.  for our purposes we used this to make API calls inside of our actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect is the react-redux function that links our components and redux store.