1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

-The methods below do not mutate the original array. 
array.map() - performs specificied function on input array and returns a new array
array.filter() - filters array elements that meet specified condition and returns new array
array.reduce() - carries out an algorithm in which all elements of an array are used, outputting a single quantity (that was a function of all the elements in the array)

Object.assign() - carries out an operation on a copy of the object (instead of mutating the original object)


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - events or occurences that cause a dynamic change in an application (e.g. a user clicking a button)

reducers - reducers can be likened to a state machine in that the reducer determines the next state of the application given the current/past state of the application and an input action

store - The store is where the state of the application is stored. The state of the application is often stored in an object tree because of all the different states an application might have. The store is known as the single source of truth because it contains the state of the system which, by definition, determines how or in what condition the application is in

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state data that can affect different components and have up/downstream effects, whereas Component state is state data that only effects the local component in which it is associated with. 

1.  What is middleware?

Software that is used to extend the utility of other software by conditioning or modifying the data being exchanged between two sets of software, hence the name 'middle'-ware.  

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is middleware used with redux to handle asynchronous data exchange between an application and a database. Redux-thunk allows us to write action creators as functions instead of an action, which makes it so that a desired action doesn't get called contemporaneously by the reducer when the action creator outputs an action. Without redux-thunk, an action creator outputs an action type and payload to the reducer which then updates the state. With redux-thunk, the action creator outputs the action object to redux-thunk middleware, the action object is conditioned in some way, and then it is passed to the reducer. Redux-thunk middleware is most commonly used to deal with asynchronous data calls so that requested data has time to be acquired before performing an action. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect allows us to link up our components to our app's store. 
