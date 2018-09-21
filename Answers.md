1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign(), .map, and .filter don't have side effects. We use Object.assign() to extend the properties of another object.


2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects with payloads that are sent to a reducer. Reducers change the state based on actions taken. Store is the only place in Redux where components receive state from, rather than a complicated hierarchy in vanilla react (although they can be used together)


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is our store, and component state is a traditional react state in a specific component.


4. What is middleware?
Middleware received data from actions and manipulates it before being passed to the reducer. It extends other functions.


5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-thunk is middleware that allows for async functions like promise. Our action creators can use functions with direct access to dispatch.


6. Which react-redux method links up our components with our redux store?

the connect method
