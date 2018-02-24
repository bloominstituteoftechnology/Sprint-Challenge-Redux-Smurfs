1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

*  Three methods that do not produce side-effects are .map(), .filter(), and .concat() for arrays...we can use the object spread `myNew = [...obj, new props(optional)]` for creating a new object and extending the properties of the old object...

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

* `actions` in Redux are the objects dispatched from the view with a type property, and any other relevant data, that go to the store, through the `reducers`...`actions` are the only way to interact with state in Redux...direct changes cannot be made. The `reducers` allow the `actions` to filter through them, and when the appropriate portion of the combined reducer is reached, it updates the state of the app. The `store` holds the state, receives `actions` through it's `reducers`, and can optionally use middleware to deal with APIs and other asynchronous action in the app. The `store` is known as the 'single source of truth' because it hold all state and exists as a single entity: unlike in true Flux pattern, there is only `store` in one instance in Redux.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

*  Application state is the state held by the store, that can only be modified by the actions and reducers. This is the appropriate place for any and all state that is not confined within a component, and/or has any effect on other components in the app. This makes sure that updates and resulting changes can all be coordinated from one place in the app. Component state is state held in traditional React manner, on the component ,and only affects the component itself.

4. What is middleware?

*   Middleware are functions that are imported into the app, that live in the store, that are capable of handling asynchronous events, wherein a dispatch has been made, but a return has not been received, as in an API.

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

* `redux-thunk` is middleware that specifically allows the use of APIs as an asynchronous process in Redux. It returns a dispatch function that then uses one or more dispatches after a promise has been delivered. 

6. Which `react-redux` method links up our `components` with our `redux store`?

*  The `connect` method links up our components and our redux store.