1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map, filter, reduce. Object.assign is used to create a new object while not affecting the original object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is an object that holds state for your application. It is known as the ‘single source of truth’ because it is the only place where state exists. Actions are objects which are returned by functions known as action creators. Actions have a type and usually a payload. Reducers are functions that handle state changes. They take in the old state and some action, and return the new state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Redux controls application state, which is the overall state of your application. Component state is local to one component. Form inputs are an example of when you would want to use regular React component state.

1.  What is middleware?
In Redux, middleware creates an extra step between actions and reducers. It allows us to control which actions happen at what times.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware used to handle asynchronous requests. It gives action creators direct access to the dispatch method.

1.  Which `react-redux` method links up our `components` with our `redux store`?
The connect method links our components to the redux store.