1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
a) map returns a new array without mutating the original.
b) Object.assign({}, state, property we want to change) 
c) concat
d) slice

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions = are just that - actions - the actions file is full of action creators that tell us what the actions are in a given project. It's a function that returns an object that describes what will happen - it looks like:

const addfriend = () =>  {  type: ADD_FRIEND, payload: friend  };

reducers describe HOW the application will take place. This is where switch statements go. 
They look like:

const imAPrettyReducer = (state, action) => {
    switch(action.type){
        case ADD_FRIEND:
            return Object.assign({}, state, stuff you want to change         )
        default:
            return state;
    }
}

the store contains everything that the state is and every will be. It's like an archive of sorts of how our application looked when we first declared the store into being and then because of its immutability, it will be an archive of sorts for everything we do to the application in the future. 


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state equates to the store and component state equates to state held in the component. It is better to use the Redux store when you have user interactivity that needs to persist throughout their web experience on your page (i.e. shopping cart on a online store for instance). It is better to use application state (or local state) when you have data who's storage is more short term

4.  What is middleware? 

Middleware is an intermediary between framework receiving a request and then giving a response. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is a type of middleware for redux. It allows us to change our action creators from functions that return an object to functions that return another function that contains dispatch as a parameter. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect via mapStateToProps
