1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign, Array.map, Array.filter. To create a new object while extending the properties of another object one would use the spread operator. For example: newObj = {...oldObj, newKey: newValue, etc}

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store refers to the global state. The store can be connected to any component using the connect method and the map state to props method. Actions are the functions that get passed to the components which in turn trigger the reducers via the dispatch method. Reducers take the object dispatched by the action functions and update the state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
In the context of a react/redux app, application state refers to the redux store while component state refers to the local state in a constructor function. One would use component state for rapid changes which only effect the given component, such as the input fields of a form.

4.  What is middleware?
Middleware is an optional step between actions and the store. It allows us to expand the functionality of our actions or share the data being passed to a source outside of the normal chain of redux events.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk allows us to create actions that return functions instead of objects. This is particularily useful for asynchronous activities, such as api calls. Redux thunk allows for chaining of dispatches, so one action can trigger the reducer multiple times based on the progress of the asynchronous action.

6.  Which `react-redux` method links up our `components` with our `redux store`?
connect
