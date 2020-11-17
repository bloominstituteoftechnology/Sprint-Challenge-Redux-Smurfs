1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - assign, concat, map 
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions - payload of info that send data from your app to your store. 
    - reducers - specify how the apps state changes in response to actions sent to the store.
    - store - is the object that holds the state, allows acces to getstate, allows state to be updated, i.e it brings everything together.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - apps state is basicaly a globally scoped state, component state just stays on teh component.
4.  What is middleware?
    - extension for action dispatching to the reducer.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - allows the creation of actions via callback instead of actions.
6.  Which `react-redux` method links up our `components` with our `redux store`?
    - connect.
