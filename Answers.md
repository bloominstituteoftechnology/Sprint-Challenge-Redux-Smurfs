1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
Filter doesnt mutate the original array, same with concat or map. Object.Create() is what we use btw.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? 
Actions are Payloads that send data to your code. They are the only source of info for the store. send them using .dispatch()
A reducer is a function that takes two values and reduces them to 1.
Your store holds the whole state of your application.
Your State Doesn't change all the time. Its useful to know exactly where your state is.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global whereas your component state is local to your function or class.
1.  What is middleware? 
The middleware sits in between the dispatch and reducers, which means we can alter our dispatched actions before they get to the reducers or execute some code during the dispatch. An example of a redux middleware is redux-thunk which allows you to write action creators that return a function instead of an action
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is middleware that makes action creators return a function instead of an action.
1.  Which `react-redux` method links up our `components` with our `redux store`?
.connect() does.
