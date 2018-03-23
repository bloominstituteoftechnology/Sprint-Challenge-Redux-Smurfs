
# Sprint Challenge Redux: 

## Self Study Questions:

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    * .forEach, .map, sqrt()
    * Object.assign()
2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    * With the exception of very small types of data manipulation, (like say, storing empty strings in state that are updated to whatever you type into an input using onChange) good practice in using redux requires that all data (including the initial state) be stored in a single location called the 'store'.  Whenever a user interacts with the page in some way (excluding small stuff as mentioned previously), that the 'actionCreator' associated with that interaction sends a message, along with any necessary data, out to the reducers.  This message is received by a particular reducer, which contains all the function logic needed to manipulate the passed in data (e.g. the new data representing the desired updated virtual DOM).  Once the reducer has completed its manipulations, the store sends out a notification of the state changes.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    * As mentioned previously, Applications state, aka the 'store', should be used for any major changes in state (e.g. an added , deleted, or updated item to a list).  The Component state can and should be used to allow minor changes (such as temporarily storing comments or inputs, as the user is creating them, BEFORE they are submitted).
4. What is middleware?
    * Middleware is software that kind of acts as a gate-keeper for information passed between action creators and the reducer stack.  If middleware if present, then EVERY action that is dispated from the an action creator, must pass through all middleware sequentially before being finally dispatched to the reducers.
5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
    * I am not sure about this. redux-thunk allows us to write action creators which return not just objects, but functions.  I am still unclear on why we needed to do this though.  From one of the Reux-II-Mini README.md, it is clear that being able to return functions allows you to complete multiple tasks at the same time (e.g. asynch function), which saves time.  Beyond this I am not sure of the answer to this question.
6.  Which react-redux method links up our components with our redux store?
    * connect()


