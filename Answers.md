1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

array.reduce()
array.map()
array.filter()

Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store - the store is where the application state(s) is centralized. 

actions- actions are packets of information that are sent off when a user triggers a desired change on the webpage. The actions themselves trigger the reducers which in turn set the state of the app. 

reducers- given the current state of the app and an action as an input, the reducer sets the app state


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state. Component state is the state of the sole component. Component state is good to use when the state has little to no bearing on any other states in the application, such as the current text in a given text box. 

1.  What is middleware?

Middleware serves as a bridge between two software platforms, allowing the platforms to work together for a specified goal. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is redux middleware that allows redux to handle asynchrounous data inputs. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect(mapStateToProps)(App);
