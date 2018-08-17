1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - Map, Filter, Reduce.
    - We use Reduce. 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions: The actions are a combo of action creators and actions. The action creators are normal functions that emit an action that is sent to the reducers. Actions on the front end are any events triggered by the user. 
    - reducers: The reducers receive actions emited by the action creators, create a new array of state and apply the action's results to that new object. 
    - store: The store is the central hub of state within Redux. It is the place where state is maintained and is the centeral source of immutable truth of state for any given program. It is known as such because, if used as designed, the developer and user will be incapable of mutating state directly/accidentally. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state refers to the store state and is useful for distributing the global state to any given component in need of it. 
    - Component state is state held locally and is useful when it is the only component in need of said state. A good example is the input/button systems we have been creating, wherin only the input component that handles that input field's input needs to know about the state. 

4.  What is middleware?
    - Middleware is delivered through Redux-Thunk and sits inbetween our actions and our reducers, providing a measure for safely controlling our actions and ensuring they are properly delivered to the reducers. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - Redux-Thunk allows us to apply dispatch methods to our action-creators, providing an additional layer of debugging ability and overall data management. 

6.  Which `react-redux` method links up our `components` with our `redux store`?
    - Connect links up our components with our redux store. This is a powerful feature in that it means we can call global state from any component without having to worry about passing props down, which is particularlly helpful, if you are nested deeply. 