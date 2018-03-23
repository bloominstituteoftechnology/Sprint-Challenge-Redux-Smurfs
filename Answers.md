1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

slice, spread, and assign

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions do the hard work

reducers use the actions to update or change the store

the store holds the state, its the single source of truth because there is only one.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

the app does everything at once

the components can be asychronous and are not always used. 

4. What is middleware?

axios, compose, redux, thunk, logger

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

It helps extend the asynchonous behavior in the components and is very effective within actions because it will stop all of the http requests from being enacted too soon by looking at what is being dispatched and when/why those dispatches or exports are being called. 

6. Which react-redux method links up our components with our redux store?

crud