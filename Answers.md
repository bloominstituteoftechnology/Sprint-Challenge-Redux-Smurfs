1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Array.prototype.map() - returns a brand new array
    Array.prototype.filter() - returns a new array
    spread syntax for arrays: [...ogArray, anyElementYouWantToAdd]
    Object.assign({}, originalObject, {propsToAdd/Replace: correspondingValue})

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions - contains data to be sent from the application to the store. the returned value of an action creator is sent to all reducers.
    reducers - determine how the global state will be affected by an action. the state will be updated and made available to all connected components
    store - an object that holds the state of the application


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    application state refers to redux's store, which is made available to the entire application...
    component state refers to a class components state object within the constructor. this method may be more useful than application state for an action specific only to that component, such as temporarily holding an input value...


4. What is middleware?

    middleware is a 3rd party redux extension that intercepts every action prior to it being sent to the reducer(s). it's primary purposes is to allow async actions to deploy.


5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    thunk allows you to build action creators that return a function rather than an action. it offers the ability to create conditional actions. we have been using it to incorporate promises into our action creators.


6. Which react-redux method links up our components with our redux store?

    connect!


7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?