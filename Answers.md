1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, reduce, and filter.  The Object.assign method is for new objects that extend another objects properties. Can also use spread operator and make changes to individual properties as desired.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads of info that send data from your application to your store. Reducers interpret and decide how actions affect the state of your application. The store holds the state of the application and the functions required to change it. There is only one store in a Redux app. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is a global state, Component state is a local state that can be given access to the global state if desired. Not sure, maybe if you had a large project with a bunch of people working on it global state would be preferable?

1.  What is middleware?
Middlewares are code packages that let us manipulate and add complexity to our actions before they reach reducers and update state.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It's a middleware that allows you to use Redux action creators asynchronously

1.  Which `react-redux` method links up our `components` with our `redux store`?
The connect method