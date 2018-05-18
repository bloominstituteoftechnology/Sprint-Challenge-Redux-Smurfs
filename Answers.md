1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, concat, object.assign
Object.assign can create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are like recipes - they tell the reducer what to do. The reducer uses the instructions in the actions to update state and return a new state, which gets sent to the store. The store holds the app state in an immutable form and could be called a 'single source of truth' since that's where everything inthe app goes to find the app state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state for the whole app, contained in the store.
Component state is the state of an object contained within a class component constructor.

App state is probably better if state needs to be shared between components. Component state might be better if you only need to work locally, like if you want to temporarily hold an input or something. 

4.  What is middleware?

It's like the middleman between the action and the reducer. It intercepts the action and then decides whether to send it to another middleware or continue on to the reducer. This helps with timing.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows you to use a dispatcher to execute multiple action creators. It allows the action-creator to return functions rather than actions.

6.  Which `react-redux` method links up our `components` with our `redux store`?

connect
