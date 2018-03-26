1.  Object.assign(), Array.concat(), Array.map(). Object.assign()
    will create a new object while extending the properties of
    another object.
2.  Actions are objects that must have a 'type' property (usually
    a string) along with any other necessary data. Actions are
    triggered by a component and then sent to the reducers. Reducers
    que the update to the app, communicate with the server and catch
    any errors. The reducer then updates the store. The store is the
    globally accessible state of the app.
3.  Application state is the global state of the app and can be
    used by any of the components when accessed correctly. component
    state can only be accessed by it's according component. If a
    property on the state needs to be accessed by other components
    of the app, it should be written to the application state. If it
    is only relevant to a single component, then it should be kept
    contained withing that component.
4.  Middleware is a gateway of sorts for all the actions and execute
    them sequentially. It can stop actions, forward them, dispatch
    another in place of one as well as dispatch multiple data.
5.  Thunk gives direct access to dispatch. It let's you write action
    creators that return functions rather than actions. This is useful
    when you want the result at call rather then when it it=s assigned.
    It can be used to delay an action or employ an if statement as well.
    The inner function will need to be passed the store methods dispatch
    and getState.
6.  mapStateToProps() maps the state of the store to the state of
    the component where as connect adds the state of the component to
    the state of the store.
