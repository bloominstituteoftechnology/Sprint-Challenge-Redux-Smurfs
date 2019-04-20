1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three methods that do not produce side effects are .map, .filter, and .concat. We can use Object.assign an empty object as the first argument and a predefined object as the second argument in order to create a new object and extend the properties of the predefined object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that describe the type of change being triggered through an application, and will also contain information associated with that change, like the data submitted through a form. Based on the type of action and the associated data that the reducer receives, the reducer will then update the global state that is established in store. The 'single source of truth' in a redux application is the global state that is set up in the application's store, which is accessed as needed by the view components within a Redux application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and can be accessed throughout various components that are set up within a Redux application. This is useful when components are utilizing the same information, like when a username is displayed in multiple components. Component state is localized to the component, and is more useful for storing component-specific information, like when an individual form component needs to store its respective input field values.

4.  What is middleware?

Middleware is used to capture an action that is triggered from the view state and implement some sort of change using that action before it passes the action to the reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is middleware that allows us to set up asynchronous actions within Redux, which is synchronous by nature. It allows us to implement promises within our action creators so that actions can be triggered asynchronously, like when data is being retrieved from a server. 

6.  Which `react-redux` method links up our `components` with our `redux store`?

`connect` is the method that links a component with the `redux store`.
