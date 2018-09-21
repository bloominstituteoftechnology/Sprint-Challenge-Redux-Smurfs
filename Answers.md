1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

* `filter()` - this returns a new array containing the output of the old array after a callback filtering function has been invoked and does in an a non mutative way.
* `map()` - this maps over an array and does a specific action upon each iteratable item based on a callback function that is passed in as a parameter.
* `find()` - this returns a new array containing the output of the action of a boolean operation to test a condition or set of conditions using a callback function to return the items that come up as true.
* `Object.create()` - this returns a new object and extends the properties of an object passed in as a parameter in a non destructive manner.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

* `Actions` are fired by a dispatcher they move data via a payload from your application (containers / components) to the store. The fired action goes to the `Reducers`.
* `Reducers` act upon the action that has been sent to them and describe the methods to evaluate and change the applications state. they break down the actions that are fired in to smaller pieces and distributethem down the pipeline to the relevant areas giving the data manipulation / passing a cohesive feels and aid state changes in response to the actions that were fired.
* `Store` - this is a single source of data and helps the application seperate concerns by way of centralizing the data workflow to one place. it is a single source of state that all of the containers / views can use to be a solid fact for the truth of the application state. This is the centralized data store that will keep state and is a pivtol role in the concepts of the redux echosystem.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

`Application state is used for data that is to be accessed by the entire application such as arrays of objects that are to be accessed by components and displayed to the user. and object state is useful if you want to seperate your data concerns in to a more fgranular approach for instance the ``input`` field in a form component.

4.  What is middleware?

`Middleware` is a function / module that sits between 2 endpoint functions / modules and has an entry point for data and mehtods to flow in to it and acts upon that data / methods then returns the changed / refactored data to the next function / module down the line like a pipeline component that we can put in the pipe to join 2 of the other components and act upon the data inline. the name has descriptive and practical meaning as the act of what it performs is that of monitoring and acting upon data flow withing the application.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` deals with creation of promises so that the async calls of the methods in the aplication pipeline can be firing actions after the promise has been resolved and can be used in situations where we would like to do an async call to a server for instance and when the resolution of the promise is complete the actions can be performed on the payload / response data in a meaningful way.

1.  Which `react-redux` method links up our `components` with our `redux store`?

The `createStore` method links up `components` with the `redux-store`
