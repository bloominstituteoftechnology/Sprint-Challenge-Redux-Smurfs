1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
-   Objec.assign(), Array.concat(), and the '...Object' are the 3 methods that do not produce side-effects. We use Objec.assign to create a new object while extending the properties of another object.


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
-   Actions are payloads of informatin or data that let the store knows about something happened. Reducers are then taking thos actions with the carrent state and returns a new state based on the type of the action. Stor is the general state of the application. it keeps the state of the application and let every component knows if there is a change to the store. It is called single source of truth because this is the only place where the data of the application is stored, all the data is coming from this place.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
-   application state is the store in redux. component state is the stat of individual store. we should always use application store as a general place of storing data, but if we need state inside a component to temporary update or keep track of local data we can use component store as well. 

4.  What is middleware?
-   A  Middleware is any number of functions that are invoked by before your final request handler is, and thus sits in the middle between a raw request and the final intended.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
-   Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

6.  Which `react-redux` method links up our `components` with our `redux store`?
-   The connect method links up our components with our redux store.