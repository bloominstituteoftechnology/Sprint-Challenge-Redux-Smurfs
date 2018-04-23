1.  .map, .filter, .concat

2.  Actions are the changes that will take place in the application, like an event
    reducers take actions and create a form of state based on it
    store is where the app state is stored, it is a global store that any component inside can access

3.  Application state is stored in the global store, component state is local state for the component
    Use store when you have multiple components that have access to and want to change the same state

4. take one functionality and extend it's ability by adding extra reducer-like functions

5. Redux thunk allows async redux, allows us to return callbacks too not just objects (what the reducer does)

6. Connect

