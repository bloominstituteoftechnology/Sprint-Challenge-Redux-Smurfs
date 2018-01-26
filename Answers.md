1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Array.map(), Array.concat(), and Array.slice(), they all produce a new array with the changes per the method. Object.assign() changing any properties within the method to make a new object with properties differing from the original but having the same properties.

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Store - The store is a tree that holds all the state within it. It cannot be changed without dispatching actions on it. 
    Actions - Actions are simple functions dispatched by the store that tell the reducer what to do, they simply return objects with type of action and the payload for the reducer to use.
    Reducers - Functions that describe what the actions do, taking the state and an action as parameters. They return the changing of states without directly mutating the original state.

    The store is known as a 'single source of truth' because it contains all the most important information (the state), and everything else in the redux application relates to the store in some way in order to retrieve or add information to it. None of the other pieces of redux have any substance by themselves, only in relation to the store with each other.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the state held within the store while component state is held within a class on a specific component only, possibly not know to other components whereas application state is known throughout the application. A good time for application state is when the whole app needs to be aware of the state, not just specific components. Another good use for application state is when you need to keep track of changes to the state. Component state would be useful in a situation where only the top-level component and very few others need access to the state or for information that will change very quickly within the same page.

4. What is middleware?

    Middleware is a function that is run between dispatching an action and it reaching the reducer. These can do things like log actions to the console (logger), or allowing functions to be returned from action creators instead of plain objects (thunk). 

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk allows action creators to return functions instead of just plain objects. It also allows for async actions to take place. 

6. Which `react-redux` method links up our `components` with our `redux store`?

    The Connect method of react-redux links up components with the store. 