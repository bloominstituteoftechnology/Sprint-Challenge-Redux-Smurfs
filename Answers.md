1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
4.  What is middleware?
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our 5action-creators?
6.  Which `react-redux` method links up our `components` with our `redux store`?


1. Array.map(), Array.filter(), Array.reduce()
Spread operator or Object.assign()

2. Actions represent possible interactions that the user may have with the UI,
as well as any actions we want the app to take on in general. They are like
our functions.
Reducers read what action is being fired, and accordingly create a new state
based on the previous state and the action fired to return a new state. They
are parellel to React's this.setState()
Store is where all the state information is kept. Everything can (and should)
be stored, organized, and retrieved from the store (any data that's relevant
to all the application.) It's analogous to React's application state.
The store is known as the single source of truth because in the Redux way of
organizing things we keep all info relevant to the app in one place.

3.  Application state holds global state, relevant to all the app. Component
state holds state relevant only to that component, and is not accesible by accordinglysibling or parent component.

4. Middleware is a bridge between dispatching an action and the reducer receiving that action where we can modify and play around with that action before letting reducer take over. For example we can use logger to log our actions to our console, or axios to make AJAX api calls.

5. It allows action creators to return a function instead of action, allowing
for delayed dispatching of actions or only firing those actions if conditionals are met.

6. connect
