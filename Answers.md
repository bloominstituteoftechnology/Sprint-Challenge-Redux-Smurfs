1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- .filter, .map, .reduce
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- Actions are plain javascript object, or functions that return plain javascript objects. Reducers are pure fucntions that calculate the new version of state based on the current state and a given Action. The store is a JS object that contains the current state of the entire application.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is stored globally in the Redux store. Component state is stored locally within components. Application state would be better to use in the case where multiple unrelated components need access to the same state. They can just access the data from the Redux store instead of going through multiple levels of props.
4.  What is middleware?
- An extension point for Redux that adds new functionality like:
    stopping actions,
    forwarding an action untouched,
    dispatching a different action,
    and dispatching multiple actions.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- Redux Thunk is a separate node package that provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux Store. dispatch() accepts an action and sends it off to all the reducers.
6.  Which `react-redux` method links up our `components` with our `redux store`?
- connect