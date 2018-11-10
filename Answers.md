1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
I don't recall this comming up in lectures before, but from what I found on google, Array methods like, map, foreach, and every prevent side effects. 
Object.create matches the question as it uses an existing object as a prototype for a new object. However, Object.assign was mentioned frequently in lectures. It is used to copy the values from one or more source object and return them in a new object. I'm not sure which one the question is asking for. 
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads of information that send data from your app to the store.
Reducers show how the apps state changes in responce to the action sent to the store. 
The store is the object that brings the previous two together. It's called the singe source of truth because the state of your whole application can only be held in the store. 
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, component state is local. Global state can be held in the store, and connected to any component that needs it. Component state lives in that component and can only be passed to its children. 
4.  What is middleware?
Middleware is a way to interact the actions that have been dispatched to the store before they reach the reducer.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware that lets us call an action creator that will return a function, instead of an object method. That will call the stores dispatch method.
6.  Which `react-redux` method links up our `components` with our `redux store`?
connect