1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three JavaScript Methods that dont produce side effects are Object.assign(), Object.defineProperty(), Object.entries() and the method that creates a new object while extending the properties of another object is Object.create().

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of Data sent from the application to the store. Reducers decide how state will change in the application when actions are sent to the store. Store is the actual object that contains state and manages it, basically its where its all combined and processed acordingly.Store in known as the single source of truth because it is read only and it cannot be overwritten.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

State is managed within the component itself in Component state, however  Application state is stored in the store object and is accessed through actions and reducers.

4.  What is middleware?
middleware is a bridge between databases and applications

5.  Describe `redux-thunk`, what does it allow us to do? How 
does it change our `action-creators`? 

redux-thunk middleware allows us to invert control of the action creators by dispatching functions whic can be called at a later time or asynchronously.

6.  Which `react-redux` method links up our `components` with our `redux store`?

the react-redux` method that links up our `components` with our `redux store` is called connect().