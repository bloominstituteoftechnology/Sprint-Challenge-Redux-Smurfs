1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, reduce, and assign. We can use the assign method to extend the properties of another object.
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are object that are passed to a reducer and whose data determines what set of changes the reducer should make to state. 
Reducers are functions are passed state and actions as arguments and update the state based on the passed action's type and payload.
The store is a function that is responsible for holding the state, action creators, and reducers of an application and passing them down to container components.  
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the overall, core state of the application that holds the main data that all container components should share. Component state holds data related only to that component and its children. A good way to know when to use on over the other is to ask yourself if the data being manipulated is important to the entire app or just the component itself.
4.  What is middleware?
A functional layer between action creators and reducers that allows async actions to take place and for manipulations to actions to occur. 
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It allows us to carry out async processes and passes the dispatch method into our action creators. 
6.  Which `react-redux` method links up our `components` with our `redux store`?
connect()()
