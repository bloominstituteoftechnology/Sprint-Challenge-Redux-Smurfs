1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    -map,filter, and slice don ot procudes side-effects
    -we use object.assign to create a new object while extending the properties of another one. although the spread operator is more widely used as of ES6, Object.assign will probably be what we'll see more in the real world due to how long people have been using it.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -the store is a separate state outside of redux. it's considered the single source of truth because you don't need to pass props down from components to components anymore once you have a redux store. you can just pull and store all your state straight from redux, making it easier to access state and alleviate prop-drilling. although you can still use both react state and redux store together.
    -in redux, actions are just plain objects that are created with action creators ( basically a factory function that creates actions)
    -in redux, reducers are pure functions that take in and action and a state and produce a new state that gets sent to the store. pure functions are functions that do not alter the original arguments that was passed into them when they're called. in this case, the old state and actions.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -application state is the global state of the whole application, basically redux store
    -component state are the local state of the application, basically react component state in constructors

1.  What is middleware?
    -middleware is the software that bridges between action creators and reducers. they are like your mom double checking whether you forget anything before you leave the house for school(in this case, the reducers), making sure you have everything that you need. if you don't, she'll prepare it for you(enhances the action). if you have extras, she'll take it off of you so you only bring just the stuff that you need.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -redux-thunk allows us to do asynchronous calls in our action creators. all it's doing is since we cannot take a function in reducers, in order to do async calls, we send an ajax request through a middleware as a thunk(inner function, callback function, whichever you prefer to call it). then, the logic in redux-thunk will go through the call and return a object to dispatch to reducer.
    -it changes our action-creators by enhancing it, giving it the ability to be asyn since action-creators are synchronous by default.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    -we first introduce the existance of the store with <provider>
    -the actual method however, is connect()
    -but in order to use connect, we also need mapStateToProps and/or MapDispatchToProps
