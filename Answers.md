1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- Array non-mutating methods: .concat(), .map(), .filter()
- Object non-mutating methods: .assign(), .keys(), .values().
- Spread operator as in **...state**, or Object.assign() if an empty object is passed in as the first parameter which is mutated.

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- **store** holds the current application state and reacts to actions. 
- **actions** are dispatched from the View as an object with action.type and payload properties. Actions don’t change the state directly.
- **reducers** When an action is dispatched, the store updates the state by passing current state and current action to the reducer, and the state is updated with what the reducer returned.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Component State, or in other words, React state, is stored locally within a component. Uses include characters present in a text field as a user types.
- Application state is Redux store and is stored globally in the Redux store. Uses may include historical state changes as in undo/redo actions in an app.

4. What is middleware?

- Software that connects two otherwise separate applications.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- **redux-thunk** handles async actions. It allows to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

6. Which `react-redux` method links up our `components` with our `redux store`?

- **connect()**