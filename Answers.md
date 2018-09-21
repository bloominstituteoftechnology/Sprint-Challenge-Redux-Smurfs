1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Redux itself is based on the immutability principle. Immutable means unchangeable once it is created. When we conduct changes to our store object in Redux we simply clone the state object, change it, and then replace the old state with a new copy. We do not mutate the original object. Three javascript array object methods that do not mutate its original array object is .map, .filter, and .reduce. In our Redux assignments we would also use Object.assign() to produce a copy of all the values of old object, while also giving us the ability to then extend additional properties.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions themselves are payloads of information that we gather and then send to our applications store. Actions are the only source of information for our store. While actions do have to have a type property we are allowed to pass other information as we see fit. The action itself represents an object that is then dispatched to our store.

Reducers in Redux take the previous state stored in our store and gives us a new state via our actions. In plain terms a reducer is a function that accepts values and reduces those values down to one value. In Redux our old state and its value are reduced down to a new value and then returned. All while making sure to not mutate the old state.

Store is an object that holds the state tree of our application. The only way to get a new state is to dispatch an action onto it. With redux there is only one store. This is what is refered to as a single source of truth because the entire state of your application is stored in an object within a single store. If you want to brake up the state of our application you would have to brake up your reducers into separate files then join them into one reducer.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and Component state is local. Redux in React does give us state that we can store inside a store object and access in different parts of our application via props and the connect function. However, we can still hold local state to each of your own components in addition to holding state in the store object. For example, I could have a form that takes input from a user and stores that information on a particular components state before it is imputed to the form. At the same time I can also have the application state hold on to wither or not a user is logged into an application.

1.  What is middleware?

Middleware is a higher order function that takes the dispatch function on our actions and returns a new dispatch function. Middleware is highly useful for logging actions, routing, or turning async API calls into a series of sync actions. Normally when we dispatch an action to a reducer we give that reducer an object. In our projects with redux-thunk we where able to pass the reducer function itself as a series of api calls such as .get followed by .then and  .catch.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

In computer programming a thunk is primary used to delay an action until a result is needed or at a different moment in time such as the begging or end of the subroutine. In redux-thunk you are able to write action creators that return a function instead of an action that return an object. The dispatch of an action can be delayed or only dispatched if a certain condition is met which is something we could not do before.

1.  Which `react-redux` method links up our `components` with our `redux store`?

We are able to link up your components to our redux store via the connect function. Essentially the function "connects" the store to our component. The connect function only works on components wrapped in our Provider which is why during our coursework we wrapped the entire App by Provider. We pass in the current state we want mapped to props in our connect function along with any imported actions. Now when we access props on our component we will be able to access those values we got from our redux store object. State was passed down from our redux store to our component as props. Normally without redux we would pass down our props from parent component to a child component.
