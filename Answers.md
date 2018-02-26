1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
..* concat 
..* slice
..* map
..* I'm not a 100% on what this is asking, but I believe it is referring to something like [...state, action.payload] which is ES6 concat if I'm not mistaken.  "Extending the properties of another object" is what is throwing me off, because the way that reads along with the rest of the sentence implies that we are making object A and altering object B in one action, and nothing comes to mind that does that...
1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
..* Actions deliver information via payloads to reducers.
..* Reducers change store based on the action payloads.
..* Store is basically the state of the entire application.
..* The store is initialized with multiple states and tracks all of the concurrently.  
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
..* Application state refers to the store.  Component state refers to the state of a particular component. 
..* Application state would be used when keeping up with users for example, while component state would be used to keep up with something like form data.  Essentially, if something needs to be only known to the component, keep it in component state.
1. What is middleware?
..* Middleware takes place between action calls and reducers.  So far I've personally only used thunk, which allows for asynchronous calls to occur in redux.  I think logger was available but I've not really used it as of yet.  
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
..* redux-thunk allows for action creators to return functions.  Previously, our actions just delivered a type and a payload.  With redux-thunk, our actions return functions with dispatch functions.  (To whomever looks at this code, if you could give the proper answer to this I would be obliged.  I understand them in theory to some small degree, but not so much in practice.)
1. Which `react-redux` method links up our `components` with our `redux store`?
..* I believe this is referring to createStore, Provider, and connect.