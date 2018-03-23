1.  Array.concat() returns a new array that is a merge of two arrays passed in as parameters. EX: array1.concat(array2)

Array.map() returns a new array after looping through and calling a function onto every element within another array. EX: array1.map(element => function(element))

Array.filter() returns a new array after looping through and using a relational operator to return every element to this new array that returns as true. EX. array1.filter(element => element > 1)

Object.assign() returns a new object to a target object as the first argument and with all enumerable properties of the second argument object. Any new properties can be added as well as the third argument in the form of an object. EX. object2 = Object.assign({}, object1, aNewObject)

2.  With redux, actions are my only source of information for the store sent with the store.dispatch method and are simply "payloads" of data. Reducers are moderators of the actions and listen for the dispatch only to update the state of the store depending on what action happens. The store itself it the one source of truth of the application where state exists and allows access to it via getState(), allows state to be updated via dispatch(action), registers and unregisters listeners using subscribe(listeners).

3.  Component state or react state is stored locally within a component where as application state or redux state is stored within a variable called store set up with createStore() in the index. In the former, a mutable value in its state is passed to sub-components as props through a callback function where in the latter, components that need access to the centralized state subscribe to it and gain access. The best introduction of redux to an application is if a state is being mutated by multiple components that are already receiving props from parent components which should connect.

4.  Middleware is code used to provide functionality across a database and an application in front end web development for example.

5.  Thunk is middleware that allows action creators to return functions instead of actions, delays the dispatch of actions, or dispatch only when a condition is met. When redux is set up with thunk, the inner function within an action creator gets the dispatch and getState functions as parameters.

6.  To link up components to the redux store, the connect method is used.
