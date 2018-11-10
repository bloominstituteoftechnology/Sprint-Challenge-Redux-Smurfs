1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another           object?

   /*Three JavaScript Array/Object Methods:
     map() 
     filter()
     assign()

     assign() is the method used for creating a new object while extending the properties of another object.
   */

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux           application?

   /*Actions are payloads of information that send data from your application to your store. It is a plain JS object and the change when we want to update our state. The    only way to update the state is to dispatch that action and pass it to the reducers. 
     
     Reducers specify how the application's state changes in response to action sent to the store. It is a function that takes in the state and the action and  always returns the new state of your application.

     Store: A single source of truth in Redux. It is the object that updates the App's UI. It is a a single source of truth because all of the data lives in a one large state object.
   */

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

   /*Application state is a state that is available to your every component as long as they hook into it. It is also known as "stoe" in Redux. 
   
     On the other hand, Component state is only available within that specific component and it can only be manipulated inside that component and passed down to its children component via props.
   */

4.  What is middleware?

   /*Middleware is a Redux tool which bridges two softwares. It sits between our action creators and the reducers to extend the functionalities of the main app. It          provides a third-party extension point between the time of dispatching an action and the moment it reaches the reducer.
   */

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   /*redux-thunk allows us to write action creators that return a function instead of an action. It allows us to turn our action creators into async functions by granting   them the ability to return functions instead of plain objects. Most importantly, it is is a middleware package that will handle asynchronous requests in Redux.

6.  Which `react-redux` method links up our `components` with our `redux store`?

   /*connect() is the react-redux method which links up our components with our redux store
   */
