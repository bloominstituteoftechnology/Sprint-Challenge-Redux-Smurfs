1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
#.map(), .filter(), .concat() - produce no sid effects
#Object.assing() - to create new object and extend properties of a previos 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
# Store - defines your intial state
# Actions - tells us that something has changes
# Reducers - handles the Action and replaces the Store accordingly 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
# Main different is that Application state is Immutable. Component State is good for smaller applications, whereas Application is better at scale.

1.  What is middleware?
# An extension of Redux used to add different functionality to the store.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
# A type of middleware used to handle asych operations inside of our actions creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?
# connect();