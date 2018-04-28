Name 3 JavaScript Array/Object Methods that do not produce side-effects? 
Which method do we use to create a new object while extending the properties of 
another object?

* we use Object.assign() to create a new object, .map and .filter to return a new object/array.


Describe actions, reducers and the store and their role in Redux. 
What does each piece do? Why is the store known as a 'single source of truth' in 
a redux application?

* Actions are functions that send objects from the app to the store. Actions alter the state of an app through 
the store. 
* Reducers describe how the application's state changed but now exactly how it changed.
* Store - The store `stores` the state of the app and allows which can be changed through actions. It is the 
'single source of truth' because there is only one store in a Redux app. 

What is the difference between Application state and Component state? When would be a good time to use one over the other?

* The application state is managed by the store and it can be accessed by any component in the app. It is a 'global' state.
* A component state exists only in the component and it can be passed down to its children but not to other components.
* When you use these depends on what you want:
    * You use application state:
        * When you want to render new abd ongoing in app changes until a page is refreshed.
        * When you need to pass the state two or more levels down.
        * When you need other components to access the .
    * You use component state:
        * when data is used temporarly like the data in a form.
    * If you need data stored for longer you would store that in a database/server.

What is middleware?
* Middleware is the mid point between an action and a reducer that allows us to log actions, crash reports, talking to APIs, etc.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
* Redux-Thunk is middleware that handles asynchronous actions using createStore in a component. This allows the app to continue rendering while 

Which react-redux method links up our components with our redux store?
* The connect method allows us to connect to the store and it can only be accessed by components that exist within the Provider. We access the connect method using 
'mapStateToProps' in a component.

(Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, 
since it requires you to either make a second getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep 
two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more 
optimal such that either of these two issues are not encountered?