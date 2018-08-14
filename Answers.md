1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Concat(), filter(), and map() do not modify the existing array. Object.assign() would be used for the purpose of replication without modification to the preexisting array.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are in charge of seeing if things have changed or need to be changed. Reducers take whatever actions are dispatched and deals with the appropriate data and replaces the state that is set in the store. The store is where the state resides.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the global state where every part connected by redux has access and component state is just the local state of the perspective component. If a state property needs to be accessed by many components it's best to be put in the global state and if a property is only being used by its own component then it should probably stay in local Component state.

1.  What is middleware?

    Middleware is code that lives in between the action and the reducer. It can perform a different action depending on what action is intercepted, it can dispatch other actions, it can stop an action. It is there to be vigilant of what actions are being passed. Logger is an example of middleware in that it logged all of the actions being performed in the console.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    It is middleware that provides the ability for action creators to have the dispatch() method. This in turn allows our action creators to be able to dispatch multiple actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect().
