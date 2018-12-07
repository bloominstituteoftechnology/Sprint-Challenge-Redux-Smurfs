1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

--Array.map, Array.filter, Object.assign. Object.assign is used to create a new object while extending the properties to another project.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

--Actions is the source for updating information in the store using inputs. Reducers determine how the store is updated given the actions. Store gives information to components, also store is the data for the app.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

--Application state is information that is fed down to components. Component state provides information to the given component, only if that component handles dynamic information or as temp storage that needs to be sent to the store.

1.  What is middleware?

--Middleware is a step in-between the actions and reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

--Thunk returns another function it can call async calls or dispatch if certain conditions are met.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    --Connect
