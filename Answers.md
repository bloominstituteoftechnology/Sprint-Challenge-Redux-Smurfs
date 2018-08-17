1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?
    Which method do we use to create a new object while extending the properties
    of another object?

- `Array#map`
- `Array#filter`
- `Array#slice`
- `Array#concat`
- `Array#reduce`
- `Object#assign` - only if the first argument is a new object

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What
    does each piece do? Why is the store known as a 'single source of truth' in
    a redux application?

- `actions` - Actions are plain objects in redux representing some form of user
  interaction or anything that will change the state. In redux, dispatching
  actions is the only way to change the underlying state.
- `reducers` - Reducers are pure functions which are responsible for handling
  the dispatched actions. The store has one reducer which handles the logic of
  the application.
- `store` - Store is an object which is created from the redux library
  functions. Store exposes a few methods, including `dispatch` and `getState`
  and it holds the state of the application. Store lives on the top most
  component in an application and the data flows down from there. Thus the store
  is the single source of truth for the entire application.

3.  What is the difference between Application state and Component state? When
    would be a good time to use one over the other?

- Application state represents the data layer of the application which lives on
  top of everything else. Ideally application state must hold the data the
  application needs.
- Component state is local to the component on which it lives and its children.
  UI state may be stored in a component state. Forms are good candidates for
  holding component state.

4.  What is middleware?

Middlewares in redux allow us to add features to the redux store by intervening
the dispatch. They have the function signature `store => next => action`. A
middleware can allow an action to pass through, modify it, call other functions,
send an entirely new action etc.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our
    `action-creators`?

Redux thunk is a middleware that allows action creators to be "thunks" instead
of normal functions which return FSAs. A thunk is a function that returns
another function, this allows us to define our action creators to receive
dispatch as arguments to the functions we return from action creators and is
useful for dispatching actions asynchronously.

6.  Which `react-redux` method links up our `components` with our `redux store`?

`connect()()`
