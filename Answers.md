1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, filter and reduce.
Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
In an applicatopm `actions` are descriptions of changes, which are handled by `reducers` that provide a new version of the state to pass to the `store`. The `store` is considered 'single source of truth' because it is the central location of our app's state object and ensures that that state is immutable.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state may be shared throughout the application while the scope of Component state is locally limited to a component and its children. One would use Application state for persistent data, as well as data that must be shared across disparate components of an application. Component state can handle the more discrete, smaller scoped local data used by a component and its children.

1.  What is middleware?
Middleware are functions that act on actions before they are dispatched to reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`redux-thunk` wraps our actions-creaters into functions that can be used to dispatch those actions conditionally and/or asynchronously. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
The method connect allows us to do this.
