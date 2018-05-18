1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Answer: .filter, .map. and .reduce.  
        Object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Answer: actions - are payloads of information.  They are only source of information for the               store. 

            reducers - is a pure function that previous state and an action, and returns the next state.  Reducers specify how the app's state changes in response to actions sent to the store.

            store - is a place to hold the whole state tree of application.  To enable to change the state inside is to dispatch an action on it. 

            3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Answer: When state needs to be shared to many components and we need to keep those data over the route changes, it's Applcation state for.  For the component state is for  

4.  What is middleware?
    Answer: It is an extension point for Redux.  As reducers are supposed to pure functions, we use middleware to add new functionality to Redux.  It lays between actions and reducers.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Answer:

6.  Which `react-redux` method links up our `components` with our `redux store`?
    Answer: connect
