1. Name 3 JavaScript Array/Object Methods that do not produce side-effects. Which method do we use to create a new object while extending the properties of another object?

    1. Object.assign() - We use this to create a new object while extending the properties of another object.

    2. Array.concat() - This method combines two or more arrays and in turn makes a new array.

    3. Array.map() - This method 'maps' or goes through every element in an array, manipulating it the same way but instead of doing so to the original array, the method returns a new array with manipulated data.


2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    1. Actions - These are used to have the application interact with the store and the only way information is sent to the store. They are defined as something happening but not what actually happens. 

    2. Reducers - Specifies what actions are doing to the application's state.

    3. Store - The store is an object that holds the application's state and allows the state to be updated through functions like getState() and dispatch(action).

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The difference between Application and Component state is the Application state is referring to the global state, while the Component state refers to the local state. Component state is used to change things that won't change the overall function of the application, like editing a name in an input field (using this.state). Stores hold the Application state and can only be accessed by accessing the store.


4. What is middleware?

Middleware is code that is put between the a framework that recieves request and frameworks that generate a response. Specifically, in Redux, Middleware is used for asynchronous API actions. That is it will help debug if there are any issues between dispatching an action and it reaching the reducer.


5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to perform async or conditional dispatch, it will be used to return functions instead of actions so that an action can be delayed or done only under specific conditions. It changes action-creators based on changing its actions into functions. 


6. Which `react-redux` method links up our `components` with our `redux store`?

The react-redux method that links up our components with our redux store is createStore().



<!-- (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered? -->