1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    A: 
        Array.concat() - merges two or more arrays (does not mutate the original arrays)
        Array.map() - creates a new array with the results of the function being used on each element in the original array
        Array.filter() - creates a new array containing elements that pass a function provided

        Object.assign() - creates a new object while extending the properties of another object
            ({}, reference object, extending/changed properties here)
    

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    A: actions - these are the types that are flags that indicate what is to be performed, 
       reducers - these will receive the actions and find what case is appropriate to conduct based off of the type of action that is received; this is what actually updates the store.
       store - because Redux is a state management system, the store is our area for having a singular object that holds the state of our application. It is for this reason that it contains the entirety of the redux application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    A:  The difference between application state and the component state is that, there are components that hold their own state that is separate from the application state (nested, I suppose, since the component is nested within the application). 
    Otherwise, the application will have and manage state for all of the children components.

    It would be a good time to use Application state when you're changing a component that doesn't possess its own state.

    It would be a good time to use Component state when you don't need to change the entire application state, so that it would be something that is contained on the component being targeted.

1.  What is middleware?
    A: Middleware extends the functionality of Redux. The function of middleware can accept actions and then pass them to the reducers. The middleware can act as a toggler for sending or stopping information being sent to the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    A: Redux-thunk allows us to use Redux asynchronously. It changes our action-creators from returning functions synchronously to then returning functions asynchronously, allowing for requests to be handled out of chronological order in the background.
    
1.  Which `react-redux` method links up our `components` with our `redux store`?
    A: createStore() is used in conjunction with wrapping our App in {Provider} from react-redux. 
