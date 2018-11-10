1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .Map, .Filter, and .reduce.  Will return a new array and not alter the original array(the side effect?).  We use Object.assign to create a new object and add in the new stuff.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is where all the data we want to share between components lives.  It's the single source of truth because the entire app runs through it. The action will send a TYPE and some data to the reducer when called.  and the reducer will look for the TYPE it has received and perform some changes to the store with that new data.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is data that lives in your store.  It can be accessable globally by the entire app.  Component state is local state, only that component knows about it.  It can be passed down as props, if needed. A good time to use component state over application state would be setting up a text field input handler.

4.  What is middleware?
    
    Its some algorithm or program that lives inbetween 2 pieces of another program.  

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    thunk lives between the action and reducer, allowing us to perform asyncronous functions. we call 'dispatch', a function that get gets sent to thunk.  and because it's a function, thunk will grab it, run it asyncronously, and give us the response when it's done. 

6.  Which `react-redux` method links up our `components` with our `redux store`?

    connect ()()
