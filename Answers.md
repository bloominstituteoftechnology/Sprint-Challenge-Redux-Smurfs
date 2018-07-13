1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map .reduce and .filter/ we use map

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are triggered by user interface within the app, they sent an information packet to the reducer that contains a type and a collection of entered data.

reducers are methods of changing the stores state written in by the dev. they takes specific keys to change the state in predetermined ways.

the store is the applications state. it holds the initial state and is changed when the user passes actions that trigger the reducers to alter it.

its called single source of truth because it is a data storage place over all part of the application that can be pulled on from anywhere.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is accessible anywhere in the app, where as component state is only accessible from the component and the children it is passed to.

component state is good for handling form information, and application state is good for holding info from the databases

1.  What is middleware?

middleware is a term for software that sits between the action and reducers and modifies the application for ease of use or for debugging

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a piece of middleware that lets us use async calls in a normally syncronous redux

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
