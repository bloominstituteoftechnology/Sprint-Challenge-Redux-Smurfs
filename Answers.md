1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

object.assign, array.reduce, foreach
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
the store is the overall state of a redux application 
actions tell what can be performed to alter that state but not how
reducers explain how to alter that state  but not what to alter
because it always stores the most recent state and is always up to date. 
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is  the overall state of your application and component state is the state of individual components before they are added to the overall state of the application. 
1.  What is middleware?
packages that extend the functionality of the core language
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? allows us to access dispatch 
1.  Which `react-redux` method links up our `components` with our `redux store`? connect
