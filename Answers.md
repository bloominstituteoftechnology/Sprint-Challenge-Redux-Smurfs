1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

## 1. Slice, Map, and Object.Assign do not produce side effects as they create new arrays. The method we use to create a new object while extending the properties of another object would be Object.Assign

## 2. Actions are payloads, or the source of information for your store. Reducers define how the state will change according to the information recieved by the actions. The store combines the previous two actions to hold the applicaiton state, allow access to state via getState(), allow actions to be dispatched, register listeners, and handle the unregistering of listeners.

## 3. Component state is managed in the component and in order to pass on the state it must be done so as props typically. Where as Application state when managed by redux we can have access to the state no matter where we are in the app. It's best to use Redux with large, complex applications where state may need accessed through multiple components.

## 4. Redux thunk is a middleware that allows us to write action creators that return a function instead of an action. This allows us to control dispatch which helps when performing asynchronus requests.

## 5. The react-redux method of connect is what links us up to the redux store.