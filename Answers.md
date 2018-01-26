1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    + Array.filter()
    + Object.assign()
    + Array.slice()
    + Array.map
    + Array.reduce
    + Some of the Math. functions probably
        + Basically, we are looking to describe pure functions that return same result if the same argument is passed in. It only depends on input arguments 

    + Object.assign creates a new object and extends properties of another object

2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    + Actions are regular JavaScript objects that encompass payloads of information that send data from app to the store.

    + Reducers determine how the state changes in the app in response to the action sent to the store. Each reducers manages a single property of the application state. Reducers should contain pure functions utilizing non-mutating methods. 

    + The store is know as the single source of truth because it is where the whole state tree of an application is held. The only way to change the state is by dispatching an action on it. An analogy that helps me think about it is that the store is like your brain and when you ingest a drug/chemical that alters your brain chemistry, that drug/chemical is an action being passed to the store thus changing its state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    + Application state is global while component state is local. With application state, any component can be accessed anywhere in the app as long as they hook into it. In contrast, component state lives within that specific component and can only be update within that component and passed down to its children through props. According to David Nolen, it is recommended to only use component state for transient state and all other states should use application state. 

4. What is middleware?

    + Middleware is a still a little tough to grasp. It really just seems like a function that returns a function that returns a function. I know that is valuable when completing asynchronous functions. It passes a composition of function as one function to createStore. It also replaces the store's defualt dispatch methods and utilizes a mehtod that chains different middleware functions until the last one dispatches the action to the store. Basically, it's magic! :) "Middleware is a magical concept created by ancient elves riding unicorns." - Best Quote ever https://blog.nojaf.com/2015/12/06/redux-thunk/

5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    + Thunk is a middleware that basically stops the chain when the action is a function. redux-thunk can take a single action-creator and allow it to dispatch multiple actions. This would make complicated state updates simpler. 

6. Which `react-redux` method links up our `components` with our `redux store`?

    + { connect }