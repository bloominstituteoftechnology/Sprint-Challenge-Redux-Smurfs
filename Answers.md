## 1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
`Map()`, `Filter()` and `Concat()` produce new arrays and don't mutate the original.
`Object.assign()` creates a new object from an existing one and can also add or overwrite the new objects properties. 

## 2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The `store` is a consolidated location where all the various components of an app stores their state and is therefore the `single source of truth` for the the application. Because there is a one way data flow in Redux, the store must only be modified with the use of `actions`. They send payloads of information to `reducers`, which specify how the store will be modified by passing in new values to overrite the previous ones.

## 3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is stored in the Redux `store` while applications state is stored in the React component's state. Application state is ideal if keeping an accurate history of changes is important, while Component state is more suitable for storing temporary data such as handling the change of an input form.

## 4. What is middleware?
Software that is used to connect other pieces of software together and passes data between them. 

## 5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is used to create asynchronous actions, which is not supported by Redux alone. It allows you to write actions that return a function (instead of an action). 

## 6. Which `react-redux` method links up our `components` with our `redux store`?
Using `connect` from the `react-redux` library can be used to connect the Redux store and actions to the `props` of a component.