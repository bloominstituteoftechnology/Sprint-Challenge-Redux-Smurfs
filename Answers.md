# Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three Array/Object Methods that do not produce side-effects are Spread, slice(), and concat();. WHen creating a new object while extending the properties of another object, we use Object.assign.

# Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are essentially just plain JavaScript objects that send data from the application to the store.
Reducers specify how the applications state changes in response to actions sent to the store.
The Store is the boss, it manages the state and brings together the Actions and the Reducers.

# What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is global, and Component State is local. Deciding between the two uses depends on the situation. If you have a component that is responsible for tracking or listing something specific to that components view, then using Component State would be a good idea. If the data that is used within a component is shared elsewhere, then utilizing Application State could possibly make more sense.

# What is middleware?

Middleware is code that is put between the framework receiving a request, and the framework generating a response. In Redux, middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

# Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk allows you to write action creators that return a function instead of an action. It allows one to delay the dispatch of an action, contingent upon the results of a condition.

# Which `react-redux` method links up our `components` with our `redux store`?

That my friends, would be connect();