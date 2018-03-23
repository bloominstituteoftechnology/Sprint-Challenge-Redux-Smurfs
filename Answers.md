1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
- Object.assign creates a new Object while extending properties of another.

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- **Actions** are JS objects, created by action creators. They contain information that is sent to the **store** using ```dispatch```. They must have atleast one ```type:``` property. They basically describe the changes that need to be made in the store.
- **Reducers** duties is to take old information from the store and update it (***return new state***) with new data from an action that has been given from the dispatcher. Reducers must be ```pure functions```.
- The ***Store*** is the single ```source of truth``` because all data that needs to be used across the ENTIRE app is kept in here.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
- ***Application State*** means that any component can access state from the store. ***Component State*** lives only within a specific component and can only be updated within that component and passed down to children via ```props```.

4. What is middleware?
- ***Middleware*** provides an extension point between dispatching an action and the moment it reaches the reducer. It is basically a function that is invoked after an action is dispatched ***BUT*** before a reducer takes care of the action.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
- ```thunk``` is middleware. It allows us to write ***action creators*** that return functions instead of actions. It can be used to delay the dispatch of actions or dispatch only if certain conditions are met.

6. Which react-redux method links up our components with our redux store?
- ```{ Provider }``` in the form of ```<Provider store={store}></Provider>```