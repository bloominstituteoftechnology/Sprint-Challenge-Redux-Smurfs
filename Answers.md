1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array/Object methods that don't produsce side-effects.
.map() 
.filter()
.reduce()

Method to create new object while extending properties of another.
.assign() 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions
- Javascript objects they store the action type and payload

Reducers
- Receives state from redux store along with action
- Live in store so it's easy for them to get acceess to the state itself.

Store
- This is where we keep track of all the state of our application.

The store is the known as the single source of truth because in Redux the data only flows in one direction and by having it all in store allows to keep track of the state of our application which solves some problems related to child components being able to update parent components and probably the biggest problem would be to have multiple states throughout our application which can cause major issues as the app begins to scale. 


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is global and component state is local to that component. The Redux store is read-only so if you want to modify appliication state and are using Redux, you'll have to dispatch actions. I think a good time to use component state would be on a smaller application where you'd able to manage that state in a way that doesn't require the use of Redux.

1.  What is middleware?
Middleware provides us the ability to extend and perform actions in this case we're adding a step between action and reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
This allows us to write action creators that return a function instead of an action. The thunk provides benefit in the form of async processes.

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect