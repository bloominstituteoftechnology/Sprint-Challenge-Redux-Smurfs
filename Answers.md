            **Self Study **

_1._ 3 JavaScript Array/Object Methods 
    map(), get(), post() methods.
    Spread method. 

_1._ **Actions** are payloads of information that send data from app to store. It uses store.dispatch() to send information. Actions must have _type_ property.

    **Reducers** specify how the app's state changes in response to action's type sent to the store. It takes previous state and an action, and returns the next state.

    Store holds the whole tree of the app. It's an object with methods. It gets changed whenever actions dispatches _type_.

_1._ Application state is global. Component state is local. Any component anywhere in the app can access it as long as they hook into it. Component state lives within the component. Passed down to children via props.

_1._ Middleware: Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. It's a functio takes place after action and before reducer takes care of the action in a asynchronous method. 

_1._ Redux thunk allows to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain conditions are met. 

_1._ @connect(a,b) links up components to redux store. It injects props into newly rendered component.


