1. Name 3 JavaScript Array/Object Methods that do not produce side-effects?   
- .forEach(), .map(), and .filter()

Which method do we use to create a new object while extending the properties  of another object?
- We use the `new` operator.

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?
- `actions`: A JavaScript object that describes what changed in your application.
- `reducers`: A function that takes state and action as arguments and updates the state accordingly.
- `store`: Connects the three principles of Redux. (1) It holds the current application's state object, (2) it lets you dispatch actions, and (3) when you create it, you spegify the reducer that tells how state is updated with actions.

Why is the store known as a 'single source of truth' in a redux application?
- Because it allows us to retrieve information in constant time and maintain a clean structure for the state of our application.

3. What is the difference between Application state and Component state? 
- Application state is global (any component in the app can access it), component state is local (only that component can access it).

When would be a good time to use one over the other?
- Use application state when you want any component in the app to access it. Use local state when you only want that specific component to access it.

4. What is middleware?
- Something that happens between when the action has been dispatched and when it reaches the
  reducer.

5. Describe `redux-thunk`, what does it allow us to do? 
- It allows us to write action creators that return a function instead of an action.

How does it change our `action-creators`?
- They return a function instead of an action.

6. Which `react-redux` method links up our `components` with our `redux store`?
- connect()
