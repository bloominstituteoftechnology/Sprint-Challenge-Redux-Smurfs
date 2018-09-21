1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  #Array.map(), Array.filter(), and Array.concat()

  #Object.assign() is the method we use to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  #Actions are payloads of information that send data from your application to your store. They only describe what happened, but don't describe how the application's state changes.

  #Reducers specify how the application's state changes in response to actions sent to the store. This is where we ste our initialState.

  #The Store is the object that brings actions and reducers together. It holds applicationstate, allows access to state, Allows state to be updated, registers and unregisters listeners.
   

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  #Application state is global. Any component, anywhere in the app can access it so long as they hook into it. Is better to use on bigger projects with many moving parts.

  #Component state is local. Component state can only be updated within that component and passed down to its children via props.

1.  What is middleware?
  #Middleware gives us a way to interact with actions after they are dispatched before they reach the store's reducer.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  #Redux-thunk is middleware that allows us to hanlde asynchronous actions in Redux. It allows us to write action creators that return a function instead of an action. We can delay the dispatch of an action, or to dispatch only if a certain condition is met.

1.  Which `react-redux` method links up our `components` with our `redux store`? 

  # The connect method
