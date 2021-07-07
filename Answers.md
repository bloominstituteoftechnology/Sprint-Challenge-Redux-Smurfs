1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

* forEach method, concat method, & Object.assing 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

* single source of truth means tht our appliction state is going to be pridictable. our Actions are our source of truth to the the store because whatever data our action sends back to our store is going to be the only data send. Our Reducers will catch all the data our actions send & will decide what to do with the new data that will change our application. & finally the store is what brings & holds our state together. The store will store all our data that is send from our actions => into reducers => into our store.



3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

* Application state is state that our entire/most of our application is going to be worried about. Our component state is the state that only that specific component is worried about & only that specific component is going to worried about tht certain state.


4.  What is middleware?

* middleware is the bridge tht connects library to library . 


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

* allows our action-creators to return a function instead of an action


6.  Which `react-redux` method links up our `components` with our `redux store`?

* the connect method 
