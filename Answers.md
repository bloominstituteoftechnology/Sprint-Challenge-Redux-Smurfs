# _Questions Redux & Immutability - Self Study_

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - ```Object.assign()``` ```Array.filter()``` ```Array.slice()```. ```Object.assign()``` is used to create a new object from a source object.
2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - _Actions_ are objects that describe a way that state should be changed. The action type relays what sort of action needs to take place.

    - _Reducers_ accept state, and an action. Reducers hold the logic that calculate the applications next state based on the previous state and given action.

    - _Store_ is an object that represents the entire application as an object. The store can become deeply nested as the complexity of the application grows.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state covers your whole application globally. Any component can access state as long as it's hooked up to the Application state or ```store``` in redux.

    - Component state is localized to just that component. Any updates come directly from the component itself.
4. What is middleware?
    - Middleware connects your Data and your application. It provides services that facilitate the flow of data between your application and a database or API.
5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - redux-thunk is middleware that allows for asynchronous flow within an application by enabling action creators to return functions instead of action object.
6. Which `react-redux` method links up our components with our `redux store`?
    - ```connect()```