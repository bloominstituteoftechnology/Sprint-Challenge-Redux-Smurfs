1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
3 methods that you can use to avoid producing side effects include: .map .filter and .concat because they output a new array with applied logic vs applying logic to the original array. 
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions<br> An action is a plain JavaScript object, that describes what happened in the app. It includes a property called 'type', which holds a declarative description of the action taken, for example: type:'CREATE_POST'. Actions also usually include a property called 'payload', and the payload value represents the data being sent from your application to your store(where state lives).
reducers<br> A reducer is a function that is also the connection point between the app and the redux store. It is where the logic for state changes are written. An action is dispatched to a reducer, which takes in the action, and current state. Based on the action's type it will run logic that outputs an updated state. 
store<br>The redux store is the state of your application and lives in redux. It is known as the single source of truth because it should be the only place that state lives within your application. 
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?<br>
    Application state is global, giving all components access to the data and when using redux it is the 'store', while component state is local to the component. For simple applications it might be better to use component state. 
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
