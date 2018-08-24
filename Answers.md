1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

-Filter, map and reduce or concat. Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions send action types and sometimes data from the application to the store.

-Reducers change state in response to the actions. A store is where the whole state tree of my application lives.

-It is a single source of truth because we only want to retrieve data
from one place for our application.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state is the entire or overall application. Where as component state are individual components themselves that can
interact with state.
-If only needed input field then use component state.

1.  What is middleware?

-An extension of Redux that can stop actions, dispatch different types of actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-It is a node package that gives the ability to have our action creators
return functions that have direct access to the dispatch method. It changes the actions to return asynchronously. 


1.  Which `react-redux` method links up our `components` with our `redux store`?

-connect
