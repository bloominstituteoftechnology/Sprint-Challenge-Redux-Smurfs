1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, filter, and reduce are typically the methods that we go to when we want to manipulate data but want to avoid side-effects. This is done by basically making a new array object by using those above functions, thereby avoiding direct mutation of the original array.

Object.assign() is the function we typically use to extend the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

'Actions' seem to be oddly named, as they are actually quite inert and, well, sort of "plain". Afterall, they are simply plain javascript objects, or functions that return such objects, and contain an action type and the data that we want associated with that type. It's easier to think of our 'actions' as the actual object that gets triggered by users interacting with our app, or at least the description of the changes that will occur.

'Reducers' are where the logic of our changes is written, which ironically means this is where the action actually takes place. 
'Reducers' basically are like the function reduce, and take in our state and the action dispatched, and REDUCES it to a new state, which then replaces the old state in the store. Pretty nifty! Key thing: reducers NEVER modify the state directly, but instead replaces it wholesale. 

Our 'store', finally, is where we have our state, our actions, and our reducers. It is then "provided" by the Provider, which basically makes this 'store' (I like to think of it as an armory) available to all our components, presentational OR compositional. 
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
The application state is the state that is passed through props from the main application component, or in Redux, the state that is stored in the store and is available to all components. The component state is a much more specialized state, that is used by perhaps just one component or selectively given down one layer (such as a state we use to store input data from a form and pass down one level to a presentational componnent). In general, it's better to use application state to render most parts of an app, but if one is making an input form or need to store data temporarily for some one-off function (such as form data), it is convinient to simply make a component state for such data.

1.  What is middleware?

Middleware is just that, software that kind of stands in the middle of some function and helps us control it. For redux, our middleware intercepts our actions before they can reach the reducer, giving us new methods, such as access to async functions like API calls with axios. 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
As above, redux-thunk allows us to use async functions like Axios, so that we can use simple API calls to fetch data from a server, whether its local or not. 

The `redux-thunk` package simply allows us to pass functions within our `actions` file, which normally only takes in plain Javascript objects. If a function is passed, `redux-thunk` allows us to intercept said function before it is passed to the reducer (and probably rejected), and have it get dispatched to the state with the `dispatch` function. Pretty nifty!
1.  Which `react-redux` method links up our `components` with our `redux store`?
The connect() function, which is aptly named. It allows our components to sort of "wormhole" their way into being able to access our `store`, no matter how nested they might be. Super cool!