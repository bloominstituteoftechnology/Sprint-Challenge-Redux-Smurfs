1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter, reduce. class x extends y

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are plain javascript objects that are dispacthed (sent) to the reducer which is a function that executes some logic, depending on which action it recieves. the store holds the whole "state tree" of the application (including reducers).

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the state of the entire app, while component state is just the state of a single component (which is "unaware" of other components). if there is some data that is local to a particular component and is not needed globally, it can be stored in a local component state.

1.  What is middleware?

midddleware is are various third-party tools/libraries that can be used between the dispatcher and the reducer to change the default behavior of your actions (i.e. to make them asychronous instead of syncronous.)

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware used to change the default behavior of our actions - it makes our function calls asychronous instead of syncronous, allowing us to use things like axios to get and put to and from a serverand wait for a response.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
