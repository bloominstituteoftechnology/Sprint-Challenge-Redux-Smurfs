1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
<div style="margin-bottom: 3rem">
  <ul>
    <li>Object.assign</li>
    <li>Array.prototype.concat</li>
    <li>Array.prototype.map</li>
  </ul>
  <p>
    We can use `Object.assign` to create a new object and extend the properties/methods of another object while continuing to add our own properties/methods.
  </p>
</div>

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
<div style="margin-bottom: 3rem">
  <ul>
    <li>Actions: Actions are made up of two seperate components, action types and action descriptions. We use the action type to later pass this on to the reducer to determine which condition is true and return specific data. Action descriptions are what describes what the action is going to send over to the reducer. Typically, but we are not limited, we will only send over an action type and a payload as an object that will be read by the reducer.</li>
    <li>Reducers: Reducers are functions that are made up of multiple conditional statements, normally in the form of a switch, that will have their default state changed throughout an applications lifetime. The reducer will receive notification that the application is calling an action and determine what it should return to the application depending on the action type. It receives this action type and returns a new version of the state that it is receiving from the actions payload.</li>
    <li>Store: The Redux store is where our application state is being held. This differs from what is known as the component state in that it should not be concerned with small state values/updates but rather it holds the important data that it can now pass around from component to component without the need to pass this information from parent component to child. The Redux store can often be referred to as the `single source of truth` meaning this is where all/most of our state lives.</li>
  </ul>
</div>

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
<div style="margin-bottom: 3rem">
  <p>
    The difference between application and component state is that component state is held directly on the component and does need, and should not be, passed to the Redux Store. This state is only concerned with it's corresponding component and no other component should be concerned with what is being held in this components state.
  </p>
  <p>
    A great time to use component state over application state would be when handling simple state changes like the value attribute of an input. While the value itself may need to be passed on to another component, we can still manage this on the component without over-complicating things.
  </p>
</div>

1.  What is middleware?
<div style="margin-bottom: 3rem">
  <p>
    Middleware can be thought of as a group of functions, methods, and or libraries that will add custom functionality to an application. The application makes a call and before that call is executed or completed, depending on where the middleware is placed, that call is ran through the middleware to determine if something else should be done for the data that is either being sent or returned.
  </p>
</div>

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
<div style="margin-bottom: 3rem">
  <p>
    Redux-Thunk allows us to use asynchronous JavaScript and gives us the ability to use the dispatch function inside of our acton creators. Typically we would return a plain object from our actions. With Redux-Thunk we can now return a function, in which place our object, consisting of type and payload, as the argument(s) for our dispatch method that is inside of this function we are returning.
  </p>
</div>

1.  Which `react-redux` method links up our `components` with our `redux store`?
<div>
<p>connect</p>
</div>
