1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1A.  The methods .map(), .reduce() and .filter() produce no side effects. You can use Object.assign() to extend properties of an object to a new object. In ES6 the spread operator stands in for this method.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
2A.  Actions are objects or functions that return objects and are the only way to change state when using redux. They describe the changes that are to take place and are what gets triggered when a user interacts with a site. 

Reducers take in an action and create a new version of state based on initial state and that action. They are pure functions that take in 2 arguments, the initialState and the action. The action gives us type and payload: type tells the reducer what to do; payload tells the reducer what to update on state.

The store is an immutable object that holds all state of the app. Any components that need access to the store can subscribe to it. It is known as the 'single source...' because it can hold all the state in the app, although some developers choose to put some state on class components within the app and prop drill in addition to the store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
3A.  App state is global and component state is local.

In App State the redux store holds state and any component can subscribe to and access it.  When data needs to be shared by multiple components or pages and last between multiple visits to the site, its a good time to store the data in the store.  

Component state lives within that component and can only be updated within that component and shared via props. If data is going to change rapidly, perhaps data in a form, it may be a good idea to store it in component state, especially if the information isn't need by all the components in the app. 

4.  What is middleware?
4A.  Middleware intercepts all actions before they get to reducers. It can stop actions, forward and action untouched, dispatch a different action and multiple actions. You can compose middleware functions before dispatch is invoked and access data such as apis. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
5A.  Redux thunk allows you to write action-creators that return a function instead of an object, so you can delay dispatch or dispatch if conditions are met.

6.  Which `react-redux` method links up our `components` with our `redux store`?
6A.  connect