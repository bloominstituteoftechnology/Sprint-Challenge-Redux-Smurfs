1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map method, creates a new array after implementing a function for a provided array
reduce method, like the map but reduces the array to a single value
filter method, creates new array with all elements that pass a certain condition provided by a function
object.create is a method used to create a new object and extend the properties of an existing object

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: description of changes, and assiciated data that need to be made on the application state
reducers: pure functions that does not mutate state object but creates a clone and replaces/ updates in response to actions dispatch
store: in redux, state of the application/ global state is held within store, which is a JS object

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is what redux is all about, a centralized location, or store where the state of an application is kept, used in a global context
component state is when state is kept in the particular component or in contrast to global, locally. Unlike application state where all components could potentially have access, having state in a component would only allow that particular component access to that state

1.  What is middleware?

middleware acts as a bridge to api, allowing multiple software to homoginize and use cohesively

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows asynchronus requests, where redux is synchronous by default, the thunk middleware allows
redux to operate and request aschynchronous operations through actions

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect method
