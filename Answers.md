1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the      
    properties of another object?
--> Array/Object Methods that do not produce side-effects :--
	    Array.map()
	    Array.filter()
	    Array.reduce()
    Method do we use to create a new object while extending the properties of another object :--
	    Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of 
    truth' in a redux application?
--> Actions :- Connection between the App and the store. 
    Reducers :- Reducers are pure functions that calculate the new state based on current state and an action. All reducers will return a new state              object.
    Store :- holds a single state object for whole Javascript application.
    Known as a 'single source of truth' because- the state of your whole application is stored in an object tree within a single Redux store. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
--> Application state  :--
            application state is global
            Redux- use "stores" to hold application state. That means any component, anywhere in the app can access it.

    Component state :--
            component state is local
            Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.
    Good time to use one over the other :--
            when ever state needs to be shared by multiple components or multiple pages and we need to persist some data over route changes, all that data should go inside the redux store-- so here prefer Application State or for simple application prefer Component State.

1.  What is middleware?
--> Middleware is a term that describes specially designed software that can link two separate applications together.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
--> Redux-thunk : middleware to run asynchronous operations, talk to an API and dispatch actions to the store. 
    It change our action-creators : by  returning a function instead of an action object. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
--> React-redux method links up our components with our redux store :--
        The HOC connect() from react-redux. 
