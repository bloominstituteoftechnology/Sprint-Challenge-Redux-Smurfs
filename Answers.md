1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, Reduce, Array.from, Object.create
new or Object.create, Object.assign, 
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are functions that hold an object. The key 'type' states what the action should do, e.g., type: ADD_SMURF. The key 'payload' should provide the necessary info. It could be 1 for INCREMENT or an object with name and id.

Reducers are functions that reduce state and the action to the new state. Reducers should contain a default that returns the previous state unchanged by any actions.

The Store controls the current state. It accepts *proposed* changes of state from a child on the state tree and as long as there is no errors thrown the Store passes the *actual* change of state to any other child on the state tree that needs the current state. Thus, the Store is the single source of truth since only the Store will change state and it controls the order that it is done.



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is what the React ideology follows. It divides the application into smaller components. If we think of an application as the United States, the components would be the 50 states which are further subdivded into counties, cities, etc. Redux does the same thing, but instead of grouping components of a website (header, body, nav, form, footer, etc.) it subdivides the state tree by actions (adding a name to a list using a form, deleting that name from the list, etc.). Noun is to verb as React is to Redux.

So, when the application is very large and being subdivided so that multiple teams can simultaneously work on various sections, it is ideal to use a component based approach to handle the various components and states.

If an application is small, being worked on by one person, and/or only has 1 state, it doesn't need to be divided up.

1.  What is middleware?

Middleware is like a black box that can surround a state so that the rest of the application cannot touch it. The component can see the input and output only. Middleware can also be used to verify that the information came in in the proper format (e.g., object) and leave in the proper format (e.g., object.)

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to write action creators that return a function instead of an action (which is an object wrapped inside a funciton.) It allows async behaviour which allows the program to run only if a later condition is met

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect

See https://cpoit.github.io/ for more.