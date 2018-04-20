1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign, map and filter. We can use Object.assign to extend the properties of an object to a new object.

2.  Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions get data and the reducer returns the data provided by actions into the store which acts as a consistent state for the whole application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

An application state is the state for the entire application while a component state is only used for that component. When components need to interact with each other application states are better but if a component can stand alone then it can just use its own state.

4.  What is middleware?

Middleware is what the actions go through before they go to the reducer.

5.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

redux-thunk allows us to handle asynchronous requests for data. It makes our action-creators return functions instead of actions.

6.  Which react-redux method links up our components with our redux store?

Connect.

7.  (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?
