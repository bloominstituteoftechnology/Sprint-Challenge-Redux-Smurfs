1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

The 3 Methods that don't create side-effects are map, filter and assign. We us Object.assign when extending the properties. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are used to send data from to the store. Essentially they are just JS objects.
Reducers are used to update the state. They take in the present state and the action ad return the new state.
The sroe is were the entire app can store state in a single location. I can only be updated using both actions and reducers. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the Store that can be easily accessed from any part of the app. Component state is the state that is local to a componenet and can be passed around using props. 

A good time to use Application state is when the data is needed in many different parts of the application. Component state is good to use in areas that the state is just needed in the componenet or it's close child components. 

1.  What is middleware?
Middleware is used to be able to delay the sending of data so that we can better control when data is sent and updated. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk gives us access to dispatch() and allows asynchronous functions to be created. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

They are linked with connect().