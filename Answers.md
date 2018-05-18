1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    The 3 Javascript Array/Object Methods that don't product side-effects are the following: Array.concat(), Array.map(), and Array.filter(). 

    We use the Object.assign() method to create a new object and then extending the properties from another object to this new object.  
  
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are used to change a state in an application by send data or information to the store. More speciafically, we use Action creators to do this. The latter are functions that create the Actions.   

    Reducers respond to the information sent by Actions on how the state should be changed ot updated. 

    Store holds the data or state of the application. Hence, it's called the 'single source of truth' in a redux application.  

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state is state that is contained locally or inside of a class component. An application state is state of the entire application.   


4.  What is middleware?

    By installing Middleware, we are able to add more functionality to Redux. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a middleware for Redux. One of its great benefit is that it allows us to be able to use the promises methods. 
    

6.  Which `react-redux` method links up our `components` with our `redux store`?

