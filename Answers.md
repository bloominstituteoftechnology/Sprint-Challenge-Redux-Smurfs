## Answers

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?  
- map
- Object.assign, we use this one to create a new object with the properties of another.
- slice

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?  
- The store is like the overall state of the entire application
- Actions are just objects that have a type and some data. This is going to be passed into the reducer.
- Reducers receive an action and then based on the type of the action, returns a new version of the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?  
- Application state is good for keeping track of interactions with the UI, like if someone clicks a button to delete a friend from a list.
- Component state is good for when you have a temporary change that only matters to one component. Like for changing the information in a form before submitting it.

4. What is middleware?  
- Middleware allows us to do something between dispatching an action and when that action get to the reducer. You can use it for API calls, logging and routing.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?  
- redux-thunk allows returning a function instead of an action. This is useful for asynchronous actions, like API requests.

6. Which `react-redux` method links up our `components` with our `redux store`?
- connect