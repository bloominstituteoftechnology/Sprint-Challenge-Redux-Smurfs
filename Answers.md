1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .filter, .map, and .reduce do not produce side-effects when used properly. We use Object.assign() to create a new object while extending properties of another object.

2.  Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -Actions are objects that send data from the app to the Redux store. They indicate what type of action is performed as well as payload data.
    -Reducers receive data from actions in order to determine how the Redux store's state will be changed.
    -The store is an object that binds Redux together and holds application level state. There is only one store in a Redux application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is a global state that is kept in the Redux store and can be accessed by any component. Component state is local and only lives within that component, though it can be passed as props to it's children. If data is used across multiple components it may be a good idea to use Application state.

4.  What is middleware?

    Middleware extends Redux functionality, most commonly to support asynchronous actions.

5.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    Redux-thunk is middleware that enables writing action creators that return a function instead of an action.  This allowed for asynchronous actions to take place if certain action conditions are met.

6.  Which react-redux method links up our components with our redux store?

    connect()

7.  (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?

    