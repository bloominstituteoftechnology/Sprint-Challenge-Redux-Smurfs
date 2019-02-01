1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - Map, Concat, Filter

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - Store is in charge of your data. 
    - Reducers are the only things in your app that are in charge of updating your store. 
    - Actions dispatch actions. Actions tell your reducer how to update the store and what to update the store with. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state hold important information or data.
    - Component states are great ways to separate and organize code for UI. 

1.  What is middleware?
    - allows us to handle asynchronous requests. It can stop actions, forward
    actions, dispatch different actions and dispatch multiple actions. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - it allows our action creators to return functions that have direct access
    to the dispatch method.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    - connect