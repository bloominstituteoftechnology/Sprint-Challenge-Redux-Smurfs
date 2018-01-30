
## 1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1. Map
2. Object.assign
3. Filter
4. We use object.assign to create a new object while extending the properties of another.



## 2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. Actions: These modify the data in the Store.
2. Reducers: These take dats from the payload of actions and transfer them to the Store.
3. Store: The Store is where all of the data used by the app is kept. The store can't be manipulated, and is rather only accessed through actions, reducers and state requests.



## 3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  Application State is the state in the store, where as Component State is the state in a React Component given in the Redux app as a whole.



## 4. What is middleware?
1. Middleware is used to apply things to the Redux state. It logs any actions, errors and crashes.



## 5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. Redux-Thunk is an asynchronous middleware that allows an app to dispatch instead of actions. It can take an action-creator and allow it to dispatch multiple actions, which simplifies state updates.



## 6. Which `react-redux` method links up our `components` with our `redux store`?
Connect is the method that links the components of a React App to the Redux Store.