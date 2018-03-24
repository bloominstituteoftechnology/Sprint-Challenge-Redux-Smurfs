1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array has split and splice methods that can return new array, objects has Object.assign() method. Also in both cases spread operator can be used to create new array/object.

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 

Redux is capable holding one state across all components in one application, the way it handles changes and updates is holding one store which contains state, actions and reducers. The flow is: action is fired -> reducers will receive that action and do something with it such as updating the state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Aplication state can be accssesed accross all the components in application. Component state by default is only accessible in the component itself.

4. What is middleware? 
 Middleware can pause or do something with data before it dispatches to reducer.
 
5. Thunk is middleware which goes into effect when action returns a function not an object.

6. Which react-redux method links up our components with our redux store?

method: connect()
