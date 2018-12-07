


1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? 
       ANSWER: .filter, .map and .reduce produce no side effects when used correctly. 

    Which method do we use to create a new object while extending the properties of another object? 
        ANSWER: I believe .map allows us to do this


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    ANSWER: `actions` contain the action type and the information we need that action performed on. They are what are triggered based on human action. they are the instructions for updating the data. 

    `reducers` are functions that return objects. They handle the actions and update the state according to the actions instructions. It updates the data. 

    `store` is know as the single source of truth because contains the state for the entire application. it contains the data we want. 


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?




4.  What is middleware?
    
    ANSWER: Middleware is an element inside store that allows us to more with functions in action creation before sending the actions off to the reducers. It's an extension for Redux.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our                    `action-creators`?
     
     ANSWER: `redux-thunk` is a specific middleware. It allows us to stop actions, forwards actions, dispatch different actions and even multiple actions. 

6.  Which `react-redux` method links up our `components` with our `redux store`?
    
    ANSWER: Connect!!!!
