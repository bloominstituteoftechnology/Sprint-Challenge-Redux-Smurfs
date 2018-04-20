Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

<!-- 1.A Pure Function
2.Concat()
3.Object.defineProperty

Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
<!-- Actions are payloads of info that send data from your application to your store. Reducers specify how the app reacts to the changes made in response to the actions sent to the store. Store is basically the object that brings actions and reducers together.  -->

What is the difference between Application state and Component state? When would be a good time to use one over the other?

<!-- A Component state simply takes in props and render, also offers state to store info about the component that can change over time. You should not store heavy data in Application state. That is what makes it different than Component state because you want to be able to hold in heavy loads of data and know that they are secured. -->

What is middleware?

<!-- Middleware is computer software that connects software applications or components. The software consists of a set of services that allows multiple processes running on one or more machines to interact. -->

Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

<!-- Redux-thunk consists of very small code and also it is the most popular middleware used to handle asynchronous actions in Redux. It returns action-creaters functions.-->

Which `react-redux` method links up our `components` with our `redux store`?
