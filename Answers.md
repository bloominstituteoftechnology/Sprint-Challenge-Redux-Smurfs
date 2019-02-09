1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    -map    -filter   -reduce   -spread

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -actions: actions create an object containing a type and a payload which is sent to the reducer     -reducer- the reducer evaluates the object sent by the action-creator  and tests it against a switch statement, when the condition is validated then it will run the code block that corresponds to it, which will then update the state with whatever it is directed to change.    -store- store is just centralized state

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -Application state is global state, accessible to the entire application via connect; Component state is state that is only available in that component or any components it can pass down as props

4.  What is middleware?
    -middleware intercepts some processes, runs a function at the intercept point, then (usually) continue the process or stops it completely. (ie. logger, thunk)

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -redux thunk calls a function inside of the action-creator instead of just sending an object. This allows us to make async call to the server for information. (get, post, delete, put)

6.  Which `react-redux` method links up our `components` with our `redux store`?
    -connect
