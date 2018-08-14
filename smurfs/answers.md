1) Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

We use object.assign to create a new object and to extend the properties of another object.  map, objectassign and concat.  


2) Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A store is what holds the apps state and store are sources of truth because of that and they hold relevant data.  

Reducers get actions and state in order to create a new state.  

Actions are what tells the reducers what function it should run as well as what data to pass. 


3) What is the difference between Application state and Component state? When would be a good time to use one over the other?

A components state is local to a component where as an application state is when you want to use another components state. 

Use component state if you work locally or just passing props.  You need to use application state if you want to access another components state.


4) What is middleware?

Middleware if a function that is invoked before a reducer but after an action.  


5) Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Thunk is a middleware and allows me to return functions instead of actions.  


6) Which react-redux method links up our components with our redux store?

connect

