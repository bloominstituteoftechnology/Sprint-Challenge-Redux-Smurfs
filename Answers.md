1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .concant return a new array based on the callbacks passed to them.
We can use Object.assign() to create a new object that copys another object then add
some new properties.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: The action is a way of modifying application state since the Redux store is read only.
Reducer: Reducers take in action by TYPE and create a new object on state with the given payload
Store: The store carries the applications state.
The store is known as a single source of truth because all changes to state should go through
the store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state would be the store where it can be accessed globaly whereas the 
component state is only available locally to the specific component.
Use application state when you will need data that is presented at a child that also
a parent or another component somewhere else in the application may need that isn't
easily accesible using prop drilling. Component state would be a good option when
using the local state of the component to perfrom a neccesary function, forms
are idealy a good place to use component state as no one else in the application
needs to know what exactly it typed.

4.  What is middleware?

middleware comes right before the reducer and intercepts the action, it will allow us stop actions,
perform async calls, dispatch different actions or even dispatch multiple actions.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk gives us the ability to have our action creates return functions that have direct access
to the dispatch() method of the Redux Store allowing for async calls. It changes our action-creators
by allowing a function to be called right away by passing dispatch at its first argument then allowing
the code inside the return function to be dispatched at a later time.

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect allows us to connect components with the store.

