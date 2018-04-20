1.  .filter, .concat, Object.assign so arrays can be added to and removed from and 
    new objects can be made without losing properties

2.  store - is like a central state where the bigger chunks of information can be
    kept such as information requested from a server or data inputs submitted by a user
    actions - are functions used to perform actions, you can write data fetchers or
    modifiers here or even user functions such as CRUD functions
    reducers - are like a processor that classify the actions and process them communicate them to the store

3.  application state is the central store where the all the data can be passed to 
    the app as props, this is great for bigger data changes like CRUD functions.
    component state is the state of the individual component, usually used for smaller data tracking like user inputs or boolean based visibility

4.  middleware is what allows redux's functionality to be extended and allows us to 
    use async operations like redux-thunk and a history tracker like redux-logger

5.  it allows us to perform async operations by redirecting calculations based on 
    the state of the promise. It allows us to dispatch a pending, successful, or failed state and change the state based on the result so the user doesnt get a blank screen but can be sent an actual message if an error occurs

6.  connect(stateProps, { actiosn })(component)

7.  have the server's delete functions's response include the new list of smurfs so
    that we can simply setState the response data instead of making a new request