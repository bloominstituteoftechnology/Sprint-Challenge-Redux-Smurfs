1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. What is middleware?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. Which `react-redux` method links up our `components` with our `redux store`?

1. map, concat, assign, filter. we use assign to create new object while extending the properties of another object.
2. actions are what gets returned from action creator. it is an object that has 'type' and 'payload' property. actions get sent to reducers by the dispatch method.
reducers are funtions that receive the state and action. it acts according to the action type and regturning a new state or default state to the store.
store is an object that holds the application state. the only way to modify store is through the reducers. store is also known as  'single source of truth' because there is only one store or place or source that the application can obtain data from, which is the store.
3. Application state is a redux state. any component can access application state via connect method. component state is a react, only the component that owns that state can access it. when bulding a controlled form, or having datas within the state and don't get passed around then the component state would be an ideal time to use it. most of other time, application state will be the way to go.
4. middleware is a helper funtion that gets inserted between the actions and reducers. middleware can filter out what action can be sent to reducers and what action needs to be modified before getting sent to reducers.
5. redux thunk allows an action creator to return a function so that we can do some asyncronous stuff inside that function.
6. connect method.
