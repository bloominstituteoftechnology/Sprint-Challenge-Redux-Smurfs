1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, Reduce, Filter
Object.assign().

1)  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In the process of reaching store which is ultimately the final data storage point for the whole application, it all begins with actions. Actions are pretty much indicators for when the user interacts with something that should change the information displayed or stored, when triggered it will provide reducers information on what kind of action has occured along with some data for further changes. Reducers interpet this and using the data provided by the action (if any) will modify the store/state of the application. Store as the final stop will always have the most up to date information about the state of the application, unless something goes wrong, to where it cannot be updated. (It acts as the state for the entire application)



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component State only encompasses itself and the components below it, only being able to pass state through prop drilling. While Application state encompasses all components, and the data/state can be accessed and updated by all of them. For larger projects you want to use Application state to avoid complicated and messy prop drilling, while also benefiting from the ability to easily located and access state data.

1. What is middleware?
Middleware is a way for us to connect the database to the application.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a package that gives us direct access to the dispatch method, with this method we are able to dispatch multiple actions from one action creator instead of the one it originally could.



1.  Which `react-redux` method links up our `components` with our `redux store`?

    Connect
