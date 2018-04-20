1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? 
- Object.values, Object.keys, Object.assign
Which method do we use to create a new object while extending the properties of another object? -Object.assign
2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 
- Actions send data from the app to the store via dispatch. Reducers indicate how the state changes when responses are sent to the store. The store in redux, replaces multiple states in a typical react app.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is global, while Component state is local. If you wanted to make changes to the app itself, changing Application state would be appropriate. If you only want to change an individual component, such as an Friends List, changing component state would be the better option.
4. What is middleware?
- Middleware augments connections betwene the client and the data from the server that the client is requesting. 
5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
- Think is middleware that looks at every action and if it happens to be a function, it calls the function.
6. Which react-redux method links up our components with our redux store?
- mapStateToProps