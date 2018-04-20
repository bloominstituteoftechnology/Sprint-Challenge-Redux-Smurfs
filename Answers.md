## 1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
* Object.assign, spread operator, filter, reduce, the concat method

## 2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
* actions are functions that return objects that have a type property for your reducer to know which case to run, and they usually comewith payloads of imformation so your reducer can change the state with the information passed in.

* reducers are functions with switch cases stored within and they too are stored within the store, and they change your applications state depending on the type of action sent to the store,

* the store holds the reducers within it and the application state, the state is updated by dispatching actions or calling the action within our react app as long as the connect method is imported and in use.

## 3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

* the application state is the state within your store, this state can be pulled into any component so it is kinda like in a 'global scope' where your components can easily pull the state in and manipulate the front end with it, your component state is in like a sort of 'local scope' its only visible to that one component alone, and can be used for small things such as presentational purposes.

* the application state is good for managing data that needs to be passed in to more than just one component, and is more than just for presentational purposes.
the component state is preferred when you need to hold the input value of an element to be able to be passed into a function with ease or other 'local' functional uses.

## 4.  What is middleware?

* middleware is a method that allows us to use third party extentions that will be run after an action is called and before it reached a reducer

## 5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

* redux thunk allows use to make actual asynchronous actions, and it allows your action creators to return a function instead of an action object

## 6.  Which `react-redux` method links up our `components` with our `redux store`?
* the connect method
