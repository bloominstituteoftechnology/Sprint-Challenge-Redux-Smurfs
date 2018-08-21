1.  Array.map, Array.reduce, Array.concat

2.  Actions are functions which return objects that will be passed to the store by dispatch. Properties such as type of action and any other data can be used to change the state of the store.

3.  Application state is stored in the global store, component state is local state for the component. Use store when you have multiple components that have access to and want to change the same state

4. Middleware is a function which operates on requests before sending it further. They can be applied to many libraries with objects that are modeled as 'connections'.

5. Redux thunk is middleware for actions-dispatch functionality. It allows you to dispatch multiple types of actions making it asychronous.

6. Connect is a function that wraps components for use with Redux.

