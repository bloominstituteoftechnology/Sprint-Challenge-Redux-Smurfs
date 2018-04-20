1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map()
concat()
slice()

object.assign()

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the payloads that send data to the store. Sent using store.dispatch().

Reducers describe how the state of the store (application) will change when it responds to Actions.

Store is the object that holds the application's state, and is mutated only by Reducers that are triggered by Actions, which are managed (governed may be a better word) by Reducers.

The Store is the 'single source of truth' in a Redux app because it is the only place where application state can change, and application data can be mutated. This is controlled by the strict use of Actions that trigger the updates, and Reducers that govern how those changes may be made.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state or status of the entire application. This can only be managed and mutated via Actions and Reducers. Component state is the state of a component within the app whose state is not regulated by the Store, such as a field for name or email address that changes with user interaction.


4. What is middleware?

Middleware provides a point for third-party extensions to dispatch an action and send to the Reducer.


5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-Thunk is middleware that allows for writing action creators with more asynchronous logic. So it allows for us to not have to repeat code (keeping it DRYer, so to speak), but it also allows us to write action creators that are conditional, depending on the state of the store, allowing us to trigger the actions when we need them. 


6. Which react-redux method links up our components with our redux store?

connect()


7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?