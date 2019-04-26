1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to 
    create a new object while extending the properties of another object?
    
    Methods like reduce, map, filter produce a new array without mutating the original array.
    We can use Object.assign to extend the original object.
   
    
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store 
    known as a 'single source of truth' in a redux application?
    The store is an object that holds the state tree. There should only be a single store(the single source of truth) 
    in a redux app.
    A key idea is that state is read only and we only change it with actions(an object describing what happened). 
    Reducers(pure functions-no side effects) define how the state tree is transformed by actions. Reducers take 
    state and action as arguments and returns the next state. We NEVER put API calls in reducers.

3.  What is the difference between Application state and Component state? When would be a good time to use one 
    over the other?
    
    If state is shared between several components, the shared state should be in a single store(single source of truth).
    Therefore, the store should use Application state. An app using API calls is good for this because the several 
    components will need the API data. If state is used in only one component, that component can the state. 
    Form fields can be good for using Component State.
    
4.  What is middleware?
    Middleware is between an action and a reducer. It can modify the original action or do more actions. It can 
    help with async operations like API calls.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    It is a very useful type of middleware that can dispatch more than one actions if necessary.    


6.  Which `react-redux` method links up our `components` with our `redux store`?
    The connect method is useful for 'connecting' the redux store with the app's Components.
