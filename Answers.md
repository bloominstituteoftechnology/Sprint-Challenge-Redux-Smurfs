1. Three methods that don't produce side effects are Object.assign, Array.concat, and Array.map. Object.assign is used to create a new object that extendes the properties of another. The spread operator could also be used.

2. Actions are funtions that return an object that must have a property calle 'type' to the reducers. They are used to initiate a change in the store. The Reducer handles the action and updates the store and the store is the application state where all the global display data for the application is stored.

3. Application state is the store and is accessable to all the connected components. Component state is just the sate of the component.

4.Middle ware is an outside bit of software that accesses the store.

5. Thunk is middleware that allows us to do asychronous actions like api calls.

6. The method 'connect' links components with the store.
    