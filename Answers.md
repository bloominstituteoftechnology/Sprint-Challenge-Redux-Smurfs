1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- .concat, .map, .filter, .reduce all do not produce side effects because they create new objects/arrays.
- Object.assign() is the method that creates a new clone object of your other object and it's properties.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- the store is like storage of state in redux. It's just a seperate entity to the react state. It holds all the data for your app.

- Actions take care of the actual actions for the components. 

- Reducers use the actions to update the store data!


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state like the store in redux is data that any component in the app can have access to as long as they are connected to it. Component state is used for that specific state it is inside and can be only passed to other children components through it's props.


1.  What is middleware?
A software that lets us extend redux in actions.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux-thunk allows us to use Api's I belive in our actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

- connect!