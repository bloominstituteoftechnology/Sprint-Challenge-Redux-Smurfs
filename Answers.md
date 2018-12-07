1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Array.map() Array.filter() Array.reduce()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are objects with types and typically a payload of information passed to the reducers. 
reducers are functions that set the state of the store based on what action type was passed to it
the store holds the whole state tree of your application, the state is changed when a action is dispatched to the reducer.
its known as the single source because the application changes based on state, and the store holds current and previous iterations of state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is state accessable to the entire application
component state is state declared on a component, and the only ones who can access it are the component itself and its children.

1.  What is middleware?
a function of redux that interact with acitons that have been dispatched before they reach the reducer
in order to report errors in what was passed and make asynchronous requests

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
its middleware that looks at every actoin passed through the system, and if its a function it call that function.
it allows us to return functions such as axios requests in our action creators rather then just return an action.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()