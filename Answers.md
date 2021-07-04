1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Filter, map & reduce are 3 array methods that allow us to remove side-effects by making a new array versus modifying the original. Object.assign() allows us to create another object and extend its properties.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? The store holds our data(state) that we need globally. Reducers allow use to tell the state how it is going to change depend on the actions that we have set up. Actions just describe what happens and they send data to the store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other? Application state is a property/state you would need access to globally like an array with values versus something which could be done in component state like inputs etc.

4.  What is middleware?
Allows us to be aysnchronous. A way we applied it this week is by using the logger function that Ryan wrote.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? Thunks are functions that are returned by another function. It allows action-creators to do something versus return objects with a type and a property by returning a function.

6.  Which `react-redux` method links up our `components` with our `redux store`? Connect allows us to link components with out redux store.
