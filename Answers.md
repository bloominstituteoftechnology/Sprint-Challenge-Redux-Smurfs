1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

We can use map, filter and reduce. Object.assign can create a new object while without changing the original object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is an object that holds state, and is the only place where state exists. Thats why it's the single source of truth. Actions are objects that are returned by action creator functions. They have a type and typically also have a payload. Reducer functions handle state changes. They take in state and actions and return a new state. Magic!!

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state is controlled by Redux. This is the state of the overall app (obviously) but Component state is specific to each component. Form inputs are a good example of this.

1.  What is middleware?

Middleware is a middleman between actions and reducers and allows better control of which actions happen when.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is an example of middleware that handles async requests. It allows action creators access to the dispatch method.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect!