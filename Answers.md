1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

* map(), filter(), and reduce() do not produce side-effects (they are pure functions).  Object.assign creates a new obj while extending the properties of another obj. 

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

* Redux allows us to maintain a single state (i.e. the single source of truth) accessible by any sub components in the application, rather than muliple separate component level states.  Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

* Reducers specify how the application's state changes in response to actions sent to the store. Actions only describe the fact that something happened, where reducers describe how the application's state changes.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

* Application level state, enabled by Redux, uses a single store of state data accessible by app sub-components through actions/reducers.  Component level state should be used when state is exclusive to a component (i.e. does not need to be accessed by other components, such as resetting a form to be blank).  App level state should be used when multiple components need to access a central store of data (such as a friend). 

4. What is middleware?

* In the context of redux, middleware allows us to make asynchronous API calls.  It is applied to the store which allows us to do things like log changes of the store and dispatch actions in asynch API calls.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

* redux-thunk is middleware that allows us to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

6. Which react-redux method links up our components with our redux store?

* Connect!

7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?

* Still working through DELETE - WIP.