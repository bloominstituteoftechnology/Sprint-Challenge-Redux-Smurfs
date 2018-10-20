1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
* concat 
* slice
* map
* This is the first question I have seen since coming back and updating for MBP that I still don't know the answer.  I still don't know of something that creates one object will manipulating another.

1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

* Actions deliver information via payloads to reducers.
* Reducers change store based on the action payloads.
* Store is basically the state of the entire application.
* The store is initialized with multiple states and tracks all of them concurrently.  

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

* Application state refers to the store.  Component state refers to the state of a particular component. 
* Application state would be used when keeping up with users for example, while component state would be used to keep up with something like form data.  Essentially, if something needs to be only known to the component, keep it in component state.

1. What is middleware?

* Middleware takes place between action calls and reducers.  So far I've personally only used thunk, which allows for asynchronous calls to occur in redux.  I think logger was available but I've not really used it as of yet.  

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

* redux-thunk allows for action creators to return functions.  Previously, our actions just delivered a type and a payload.  With redux-thunk, our actions return functions with dispatch functions.

1. Which `react-redux` method links up our `components` with our `redux store`?

* I believe this is referring to createStore, Provider, and connect.