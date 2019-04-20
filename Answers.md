1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
-3 methods of array/objects that do not produce side affects are map, reduce, and filter. We use Object.assign() or {...something}

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
-actions-- they send data to the store, but dont tell it what to do with it
-reducers-- tell it how to change the state of the app depending on the action that was sent to the store
-store-- is like the mom it brings it all together allowing the easy transfer of information from the actions to reducers resulting in the change in the application that you wanted

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
-The difference is that Application state refers to the state of the application as a whole, while Component state just holds the state of that particular component. An application can be made of several different components. If there has a really high number of Components it would be useful to use the Application state especially if you have to transfer a lot of data in between the components. If it is a smaller app with less Components and less data to pass then working when Component state only would be fine.

4.  What is middleware?
-middleWare allows the ability to interact with actions before they reach the reducers. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
-`redux-thunk` it allows us to delay the dispatch of the action if a certain condition is met. For the `action-creators` it allows us to write a function that returns a function

6.  Which `react-redux` method links up our `components` with our `redux store`?
-connect()() is the method that links up our `components` with our `redux store`, it "connects" it all together. 
