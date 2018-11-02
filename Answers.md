1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
 -   .map .filter and .concat because they output a new array. object.assign creates a new object while extending the properties of another object. We can also use the spread (...) operator. 


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -  Action: A plain JS object, that describes some ACTION a user can take while using the app. This object contains two properties: `TYPE` and `PAYLOAD`. Type decribes what this user action is, i.e, FETCH_SMURFS. While PAYLOAD's value is app data that's sent to the Redux store.

    - Reducer: A function that's the hub (connector/point of control) for the app and the redux store. It is where the logic for state changes are written. An action is dispatched to a reducer, which takes in the action, and current state. Based on the action's type it will run logic that outputs an updated state. 

    - Store: It's basically the state of the app when using Redux - Also known as the single source of truth because state (truth) should not be contained anywhere else.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    - Application state: Is global state. This state gives all the app's components access to the data contained within the Redux store.
    - Component state: State that is local to he component. Usually the best approach when building a simple app. Adding Redux to simple apps is tantamount to overkill. #facts

4.  What is middleware?
    - Middleware: Sits between the actions and the reducers to further work on the action's output before being fed into the reducer. It can be thought of as a third party extension that extends Redux's (or any tech's) functionality.


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    - Redux-thunk allows us to access (work with) server data with axios, in a unique way - it permits us to return functions in our action-creators instead of plain actions.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    - The Provider is used to link our app to our redux store.

// MVP complete <3 jaklundun //
