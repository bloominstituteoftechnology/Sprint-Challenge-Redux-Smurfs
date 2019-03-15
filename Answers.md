1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter, .map, amd .reduce do not produce side effects. We use Objects.assign to extend the properties of an object all while creating a new one.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are functions that return functions. They contain and action type and the data that will be changed. The reducer takes the action and the current state and returns a new state object. The store contains the state of the application and anything that could be changed. It is the single source of truth because any part of the application that is connected to it can access it.  

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

An application state is a state the is accessed by the whole application like from the store. A component state is only for one component. A good time to use a component state is when you are using input and change handlers in a form. 

1.  What is middleware?

Middleware intercepts every action before it reaches the reducers. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is middleware that allows for asynchronous operations. it allows us to send multiple actions or none from one action creator. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect links our components to the store. 