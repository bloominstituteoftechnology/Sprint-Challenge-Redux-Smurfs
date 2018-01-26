## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    * `.map()`, `.filter()` and `.concat()` are three array methods that do not produce side-effects to the original array.
    * `Object.assign({}, obj, extension)` or `{...obj, extension}` can be used to create a new object while extending the properties.
1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    * Actions are sort of like event listeners in that they signal to the reducers that a user-interface event has occured. The reducers specify the changes that need to be made based on the action type that occurred. The store holds all of the reducers and various state changes before they are sent to the user-interface.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    * Application state is stored in Redux and technically can be accessed by all components as long as they use `connect()` to get access. Meanwhile component state is hosted by a component. It can be passed down as a `prop` to a child but it can not be accessed by a parent.  
1. What is middleware?
    * A middleware is an extension that fits between the action and reducer. As an action is sent off it goes to the middleware first before being sent to the reducer. It allows for asynchronous actions.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    * `redux-thunk` allows us to create asyncronous actions be allowing our `action-creators` to return a function instead of an action.
1. Which `react-redux` method links up our `components` with our `redux store`?
    * `connect()`