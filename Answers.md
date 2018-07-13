1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

filter, .concat, Object.assign so arrays can be added to and removed from and new objects can be made without losing properties

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store - is like a central state where the bigger chunks of information can be kept such as information requested from a server or data inputs submitted by a user actions - are functions used to perform actions, you can write data fetchers or modifiers here or even user functions such as CRUD functions reducers - are like a processor that classify the actions and process them communicate them to the store

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the central store where the all the data can be passed to the app as props, this is great for bigger data changes like CRUD functions. component state is the state of the individual component, usually used for smaller data tracking like user inputs or boolean based visibility


1.  What is middleware?

middleware is what allows redux's functionality to be extended and allows us to use async operations like redux-thunk and a history tracker like redux-logger


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it allows us to perform async operations by redirecting calculations based on the state of the promise. It allows us to dispatch a pending, successful, or failed state and change the state based on the result so the user doesnt get a blank screen but can be sent an actual message if an error occurs

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect(stateProps, { action })(component)
