## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`Object.assign({}, oldObj)`, `old Array.slice(0)`, and `[ ...oldArr ]` / `{ ...oldObj}` do not produce side effects. All states remain the same and do not mutate. For creating a new object while extending the properties of another object, we can use `{ ...oldObj, oldObjKey: newObjVal }`.

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

**Actions** are payloads of information (the only source of info) sending data from your application to your store. You send them to the store using `store.dispatch()`.

**Reducers** specify how the application's state changes after the actins are dispatched. 

**Store** brings the actions and reducers together. It holds application state, allows access to state, updates state, registers listeners and handles unregistering of listeners.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to state in all the components grouped together. Component state refers to state within one component. Application state is global, while component state is local. Any component access stores in the application state. Since component state lives within the specific component, it can only be updated within that component and passed down to its children via props. 

4. What is middleware?

Middleware pretty much makes sure connections between the action, reducer and store runs smoothly. There are multiple ways of doing so. It's best to see it as a third party extension point between dispatching an action the moment it gets to the reducer.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 

6. Which `react-redux` method links up our `components` with our `redux store`?

The connect method from react-redux links up our components with our Redux store.