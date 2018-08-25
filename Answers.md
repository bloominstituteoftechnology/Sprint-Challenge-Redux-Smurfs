1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?


Answers:

Question One: array.map, array.filter, and object.assign(). The method that is used to extend properties of another object is object.assign().

Question Two: Actions are functions that perform actions on data that is being manipulated. Reducers are functions that are executed by actions depending on certain critera or cases. The store holds all of the state in a single place for your react app. It is known as the single source of truth because it holds the data that brings your app to life.

Question Three: Application State is state that is global throughout your entire application. Component State is considered local state that pertains to the given component that has access to it. If a component relies heavily on certain state whereas the rest of the app doesn't, then that component should use the given state as just Component State; other than that, you should stick to using Application State.

Question Four: Middleware is a piece of software that provides communication between your app and other servers to retrieve data or communicate with each other.

Question Five: Redux-Thunk is middleware that allows you to call action creators that return functions instead of just objects.

Question Six: The connect function.