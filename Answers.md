1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

- smurf.map, smurf.filter, smurf.reduce; Object.create({}, smurf, {smurfy: smurftastic}).

- Store contains the state of the entire app throughout its usage. Actions are sent from components to the reducer, the reducer then reconciles with the store and "reduces" the possible views, (ex: GET_REQUEST, GET_SUCCESS, GET_FAILURE) each will update the store with the information needed to display the next view, so that if it is loading, you get one view, if it is succesful you get another view, and if it is a failure, you get a third view. 

- If I understand the question correctly, Application state is held either in the store, or in the most parent component, it can be routed out, passed as props, or accessed through reducers. Component state will hold state that is necessary for a component to execute its purpose such as holding information for a form that will be used to update the store, which can then be used to update the Application state in the most parent component. Another example would be a card, if a card displays data that is not passed into its parent component, it can be routed that data, or make a request to the store for the data, and display more text when the card is in its own view.

- Middleware dispatches actions and changes state through those actions.

- Installing 'redux-thunk' allows us to make asyncronous reductions. Our 'action-creators' can now return functions.

- Reducers. 
