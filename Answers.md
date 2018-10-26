1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map .reduce .filter -> they modify and clone but not create new objects.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: are payloads of information that send data from your application to your store.
Reducers: Specify how the application's state changes in response to action sent to the store. 
Store: One source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application State (Redux) Component State(React)

By the God himself, Dan Abramov, 

“Use React for ephemeral state that doesn't matter to the app globally and doesn't mutate in complex ways. For example, a toggle in some UI element, a form input state. Use Redux for state that matters globally or is mutated in complex ways. For example, cached users, or a post draft.
Sometimes you'll want to move from Redux state to React state (when storing something in Redux gets awkward) or the other way around (when more components need to have access to some state that used to be local).
The rule of thumb is: do whatever is less awkward.”

1.  What is middleware?
It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk allows us to write action creators that return a function instead of an action.

1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect
