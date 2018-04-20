#1. # Javavscript Array/Object 
- const array3 = array1.concat(array2), .concat
- Object.assign()
- spread operator {...obj}

#2. actions, reducers and store

#actions:
actions are the payloads of information that send data from an app to the store 

#reducers 
reducers decide how an app changes in response to the actions send to the store

#store
the store has the app state, state is updated by dispatching an action.

#3 Application state vs Component state
Application state is the state of the entire app stored in the store and can be accessed anywhere in the app while component state is stored in each individual component and in order to access the state properties, they have to be passed down manually. 

App state is good if you need access to the properties in multiple components while component state is useful if you only need the state in the one component using it.

#4 middleware

enables the app to do async work. The reducers what to perform sync ops but the middleware will be attached between the actions and reducers in order to bring in async op in the app.

#5 redux-thunk
this is a type of middleware used in redux

it enables the app to do async work. 

it will dispatch actions to the reducers

connect links up the components with the redux store

