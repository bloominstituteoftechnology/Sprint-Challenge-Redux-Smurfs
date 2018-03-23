1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
...The 3 JavaScript Array/Object methods I think does not produce side-effects are: Map, Reduce, and Filter. I think object.assign creates a new object while extending the properties of another.


2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
...Actions are informations that sends data from the application to the store. Reducers describes how state changes in an application. The store brings both the actions and reducers together. The store is known as a 'single source of truth' in a reduce application because it holds state.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
...Application is global state while component state is local state. 


4. What is middleware?
...A higher-order function that composes a dispatch function to return a new dispatch function. 


5.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
...It lets the action creators invert control by dispatching functions. They run the action in the action-creator.


6.  Which react-redux method links up our components with our redux store?
...The connector.

