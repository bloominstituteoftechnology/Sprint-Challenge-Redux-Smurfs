1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`map, find, filter, Object.prototype`

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`Actions move data from your application to your store. Reducers describe how the application's state changes in response to actions. The store is a single source of truth because it holds and updates application state.`

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

`App state is best used for data that is accessed by the entire app, such as an array of objects to be displayed, whereas component state is preferable for single objects.`

4.  What is middleware?

`Middleware is like a way station between actions and reducers. It can be used to monitor the traffic between actions and reducers, as well as for talking to asynchronous APIs.`

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk allows for the creation of promises, so actions can occur once data has been retrieved from a server.`

6.  Which `react-redux` method links up our `components` with our `redux store`?

`createStore`
