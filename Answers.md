1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, and Object.assign are the three I used the most in my projects. Each of the first two create a new array as a basic function of their design. The Object.assign is easily manipulated to create a new object. This is important because it is usually beneficial to avoid changing the initial element that you are working with.

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is the global state that can be accessed from any or every component within the app. The reducers tell us how to adapt the info we have into a new state. The actions tell the reducers what adaptations are necessary and what info we have to do it with.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the info that is available anywhere in the app. It lives in the store.

Component state lives only within the component that creates it. It is more typical React state and should only be used if there is no place else in the app that could use that information. An exception would be any downward components that might be able to use the info as props, but not have to pass anything back and forth.

4. What is middleware?

Middleware exists between the actions and the reducers and allow us to take the information and pass it through a "filter", of sorts, that allows us to manipulate or observe it in some way before it gets to the reducer.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk gives us back control of our dispatch command. This is useful in situations with asynchronous actions because we can have full control of *when* actions occur, where before we only had limited control.

6. Which `react-redux` method links up our `components` with our `redux store`?

Provider