1.  3 JavaScript Array/Object Methods that do not produce side-effects are: 
1. Array.prototype.map()
2. Array.prototype.reduce()
3. Array.prototype.filter()

Object.assign() are used to created a new object while extending the properties of another object

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe the fact that something happened, but don't describe how the application's state changes.

The Store is the object that brings actions and reducers together. The store has the following responsibilities:

Holds application state;
Allows access to state via getState();
Allows state to be updated via dispatch(action);


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local.

4.  What is middleware?

It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect redux method.