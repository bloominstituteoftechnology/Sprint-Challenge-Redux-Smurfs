1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  Answer. concat(), map(), filter(). .assign() extends the properties. 
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Answer. The store is a storage location of sorts that holds data. when an action is called data is pulled from the store and combined to render the desired results.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Answer. Application State updates throughout the entire Application that store is updated in. Component state is seen only in the component unless passed through props which is why it is normally only used for things like forms that update on keystrokes with not change in layout.
1.  What is middleware?
  Answer. Middleware is a chunk of code that steps in between the action and reducer and can perform additional 'functions' before the reducer. The most common is analysis of the store or thunk which allows functions in the action section which is great for API calls.  
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  Answer. see above.
1.  Which `react-redux` method links up our `components` with our `redux store`?
  Answer. connect.
