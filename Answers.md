1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

concat, map, reduce, and filter all create new arrays from the source array. You can use Object.assign to create a new object while extending the properties of the source object or use the spread operater to do the same thing(...)

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are changes in state that are triggered by the UI, which communicate to the reducers their type and payload.

- Reducers manage state and translate actions into the corresponding state changes using  finite state machine.

- Store acts as state in a React component. It is the single source of state storage, and therefore easier to manage than multiple states across nested components, but can still be used with state-full components.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is managed by Redux, and is the record of data that the application is using, while Component state is a local record of data that is tied to that component. Application state is good for updating data that will be transferred to the server, while Component state is good for managing UI changes until the user approves the changes by triggering an action.

4. What is middleware?

Middleware extends the functionality of redux by providing new capabilities.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-thunk is middleware for Redux, which allows us to return a function instead of an object in the action-creators. It does so by exposing the dispatch method for use.

6. Which react-redux method links up our components with our redux store?

Connect