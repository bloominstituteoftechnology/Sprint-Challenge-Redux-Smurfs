1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

a. Object.assign(), Array.map(), and Array.concat()
b. We use the Object.assign() method to create a new object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

As its name suggests, Actions or Action Creators are functions that create or return actions or events. Reducers, or the other hand, are functions that receive these actions or events created by the Action Creators. The store simple stores the data in Redux.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that exists in the application itself and is therefore global in scope. Component state is state that exists only within a particular component and is therefore local in scope. 

When your application is simple (i.e., it only has a few so-called "dumb" or functional components), then you might only need to use a component state. But when you have a bigger and more complicated application with many so-called "smart" or class components, then it's probably better to use Application state.

4.  What is middleware?

Middleware is basically a software that "sits" between the action creators and reducers. It sort of controls or regulates the actions that are dispatched to the reducers.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware. It allows programmers to do asynchronous operations within action creators (that is to say, it allows you to create promises inside the action creator functions). Without Redux-Thunk, action creators simple create plain objects. With Redux-Thunk, action creators return functions or events. 

6.  Which `react-redux` method links up our `components` with our `redux store`?

The .connect() method.