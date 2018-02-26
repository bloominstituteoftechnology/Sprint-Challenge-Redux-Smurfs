## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

[]  1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    A:
      The three objects are:
      * Object.Assign 
      * .map()
      * 


[x]  2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    A:    

      (NOTE: Beyond this discussion is the possiblity that this is similar to blockchain transactions, although I have yet to have this discussion with our TA's.)

      The only mechanism to change the store is through actions.

      ACTIONS - Actions are methods by which the store is modified and manipulated.  To quote Redux's author:  "...[an action] is the minimal representation of the change to the data.  An action is a plain JS object describing what changed in the application."  Since the state tree is read only, you cannot read or write to it.  The only way to change the store is by dispatching an action.  Any data that gets into a Redux application gets there by actions.  
      Redux allows multiple actions to operate on the store simultaneously.  However, two actions cannot modify the same object at the same time.  The mechanism for making simultaneous multiple modifications to the store is the Reducer.

      REDUCERS
      Reducers are container functions for executing single or collections of Actions bundled with the previous state.  An easy formula is Reducer = {(Previous State) + Action} => Next State.  Multiple actions can be assembled into a single payload and dispatched to the reducer.  The reducer takes these actions and the current state, internally applies the actions to modify/manipulate the state then outputs a NEW instance of the modified state as a single entity.  Says Valeri Karpov: "Reducers are pure functions: they don't rely on or modify any global state, so they're easy to test, reason about, and refactor."(https://www.codementor.io/vkarpov)

[x]  3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    A:  
      Component state resides inside the Class Component (but outside the render() and is therefore local to the Component.  This localization results in a fragmented data store.  Application state (ala Redux) moves all Component state into a single object called the 'store' or 'state tree'.  The advantage is making maintenance (modification) of state easier because everything is in one place.

[x]  4. What is middleware?
     A:
        A middleware function is a function that returns a function that returns a function. The first function takes the store as a parameter, the second takes a next function as a parameter, and the third takes the action dispatched as a parameter. The store and action parameters are the current redux store and the action dispatched, respectively. Once the middleware function's inner functions have completed their tasks the middleware function passes on the result.  The app does not have to wait for the result.  Therefore, middleware allows asynchronous execution. (Source: Valeri Kaparov,   https://www.codementor.io/vkarpov) 

[x]  5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    A: redux-thunk is middleware that allows an app to return a function instead of an action.  

[x]  6. Which `react-redux` method links up our `components` with our `redux store`?

    A: Actions link components to the redux store.