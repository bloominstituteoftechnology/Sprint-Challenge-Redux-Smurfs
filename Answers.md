1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - .filter
    - .map
    - .reduce

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - Actions: Information sent to be dispatched into the store, this info is called payload.
    - Reducers: They capture the information given by the payload and inject it into the state whenever they are called and cannot remove data, just add it.
    - Store: This is an object that holds the whole state in an immutable object tree.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state: It is the state in the state tree object taht can be accessed anywhere within the application and by many different components. This is why is useful.
    - Component state: It is the state each component holds. It is useful when only one component will use the state.

4. What is middleware?
    - It is used for logger, thunk, etc. It works by providing additional functionality between the action and the reducer.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
    - It is used for adding functions into the action, which is useful for giving conditions before dispatch or delay an action. It adds getState and dispatch as parameters.

6. Which react-redux method links up our components with our redux store?
    - {connect} from 'react-redux'

7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?