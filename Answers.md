1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?

    `.map().filter().concat()`

    Which method do we use to create a new object while extending the properties of another object?

    `.map()`

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?

    `actions` are dispatched to make changes to the store
    `reducers` look at the incoming actions and and manipilate the state based on which actions are coming in.
    `store` is where the state is held in Redux

    Why is the store known as a 'single source of truth' in a redux application?

    `The store prevents us from having mutlipte states thought out app theat repeat themselves and cause bugs.`

3)  What is the difference between Application state and Component state?
    `Application state` is whats in the redux store and any component can access it.
    `Component state` is outside of the redux store on class components.

    When would be a good time to use one over the other?

    `use Applicaiton state only on componenets that use state that no other components need access to, otherwise use Comoonent state`

4.  What is middleware?

    `middleware goes between actions and reducers and react doesn't care what happens in the middleware. It can be used to dispatch actions in multiple ways or stop them`

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `redux-thunk` is muddleware that allows us to dispatch actions. It changes them by letting us use the diapatch method that does magical thigs I don't understand yet.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    `connect()`
