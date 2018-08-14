1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    3 array/Object methods that do not produce any side effects (are pure functions) are    map(), reduce(), and concat(). We use Object.assign to create a new object while   extending an existing objects properties.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    I'll start with store, store is redux's holding area for all the information about the applications state. It is essentially a JS object which should be updated any time any globally relevant state is changed throughout the application, and this state information can be used in other parts of the application to perform actions accurately. But how do we get information from, and update information in the store? Our reducer provides us with a central function which knows the previous state of the application, and has the necessary case statements to handle all state changes in the application. It's the reducer which takes in the changes to state, and sends out the existing, or updated state. The way that we interact with the reducer, is through actions. Actions are simply javascript objects, with a "type" key which states what kind of action we want to perform in the reducer. It can hold other information describing how we want to manipulate the state, but it doesn't have to. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the overall state of the whole application, and is what is held in the store in Redux. The application state needs to be linked to a component using mapStateToProps and connnect, after which it can be passed to child components as necessary. Component state is local to, and generally relative to a particular component. Granted, while all state items in theh application state comes from components, when we are talking about component state, we are generally referring to the state which is only pertinent to a particular component, or perhaps its direct child descendents. A good time to use component state is when that state is only needed locally, and does not affect any other part of your application, as opposed to application state, when many, perhaps all other components require access to that state in order to function.

1.  What is middleware?

    Middleware are software packages (though they can be as simple as a single function) which sit between an applications actions and its reducer. It allows us to add things to or manipulate our actions so that we can either have more control over how our application behaves, or provide added functionality to our Redux app.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk is a middleware package which allows our application to dispatch functions as actions, instead of just the typical JS object which our reducer normally requires. This allows us to send async requests, and waits until a response is received, before dispatching a typical action to our reducer. Since Redux is normally synchronous, this adds AJAX behavior to our application.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect() is the react-redux method which links up our components with the redux store. This is important because it is neither a react function, nor a Redux function, but a connection between the two libraries. 