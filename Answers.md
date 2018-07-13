1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Answer: forEach, map,and filetr. Object.assign.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Answer: actions: actions are functions that return the object describing what action the reducer needs to take like adding, deleting, upadting the state. Actions are triggered after the user makes a change like clicking through UI. Actions never update the state, that is done by the reducer.They are the only source of information.

reducer: Reducers receive information from the action creators and update the store as per what action type is received. Eg: adding, deleting.

store: store is where the state lives. It's one big object that contains or holds all the application state.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Answer: Application state: When state needs to be shared between multiple components we can store that state in teh redux store, this is called Apllication state. That is available to all the components through Redux Store.

Component state: Componnet state is the state or memory of an individual React component vs the state of the entire application. 

1.  What is middleware?
Answer: Middleware is software that provides additional functionality to our applications and enhances them.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Answer: Redux Thuk is a middleware that allows us to write action reactors that return functions instaed of objects and perform asyn calls by dispatching actions. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
Answer: connect. 
