1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map() , .filter() , .reduce()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducer- Function needed inside provider that returns an object. Calculates new version of state based on the current state and given action. This is the glue between our Actions and our Store.

Action - are the descriptions of the changes that will be taking place within our application, as well as the data associated with those changes. Redux is read-only, the only way to modify the application is by dispatching actions. In short “the thing that gets triggered from human interaction with your website.” Actions are plain javascript object, or functions that return plain javascript objects. Actions send info to the store.

Store- Contains the state for the whole application. Known as the 'single source of truth' because it is immutable data. 




1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state doesn't follow a patter like component state does. 

1.  What is middleware?
Software that acts as a bridge between an operating system or database and applications, especially on a network.
It can stop actions, forward an action untouched, dispatch a different action, or dispatch multiple actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Middleware that provides the ability to handle async request inside the Action Creator.


1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect()