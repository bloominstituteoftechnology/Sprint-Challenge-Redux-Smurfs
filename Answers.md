1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- concat() -- used to merge arrays. Produces a new array w/o modifying old
- slice() -- returns shallow copy of array with the specified modifications. Doesn't modify original array.
- Object.assign (can also be done using spread operator) -- Can be used to create a new object and extend the properties of another (like Object.assign). Syntax as follows: ```const object2 = Object.assign({d:5}, object1, {c:10});``` (example from MDN). In the above example, we're creating object2, it is given a new property of d: 5, it inherits properties of object1, and then lastly it overwrites the existing c property from object1 with 10.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- "actions are payloads of information that send data from the application to the store." They are formatted as a plain JS object. The object includes the type of action (typically formatted as a string), and then whatever other data is needed to perform the action (for example, if you're adding a todo item to a todo list, you'd want to include the text of your new todo. 
- "reducers specify how the application's state changes in response to actions sent to the store." Typically reducers are formatted as a switch statement. It looks out for the action type coming in, and then handles the action based on the specified type. "the reducer is a pure function that takes the previous state and an action, and returns the next state." ```(previousState, action) => newState```
- store. The store is a single object that contains the state of the application. According to the Redux docs, the responsibilities are as follows: "holds application state, allows access to state via ```getState()```, Allows state to be updated via ```dispatch(action)```, registers listeners via ```subscribe(listener)```, and handles unregistering of listeners via the function returned by ```subscribe(listener).```"
- ref: redux.js.org docs

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Local component state is handled within React. It's specific to the component and isn't shared. Application state can be used/updated anywhere within the app. When implementing Redux, some prefer to put everything in the store. It's mosly a personal choice. A question to ask is "is local component state enough for my needs?" If the data is needed elsewhere in the app, then application state/the store is the way to go.

4.  What is middleware?
- Middleware is code that's used in between receiving a request and generating a response. So request -> middleware -> response. There are a number of use cases for this. Common examples include logging, crash reporting, async API calls, and routing.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- "Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met." (Redux thunk readme). A good use case for redux thunk is for making async calls. For example, it could be used to trigger a timeout function after 5 seconds.

6.  Which `react-redux` method links up our `components` with our `redux store`?
- getState()