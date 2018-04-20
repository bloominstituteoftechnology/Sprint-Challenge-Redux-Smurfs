1. Three JavaScript Array/Object Methods that do not produce side-effects are creating a new array with a spread operator, removing objects from an array and creating new objects via copy or from a previous object
2. Actions is an object that contains a payload of information and then proceeds to pass it into store.
Reducers take an action and state and make changes to the state dependent on the aciton.
Store is an app state which allows access to the components, and allows actions to be performed upon by the reducers.
3. The application state can be accessed by any component connected to the store whule the component state is within the component and can only be accessed there. The component state is primarily utilzied for creating and mainitng forms.
4. Middleware is a code that is within the framework and generates request which the framework then must respon to .
5. Thunk is for action-creators to return functions instead of objects, which allows to return dispatch fuctions and/or delay action dispatch.
6. MapStateToProps is the method that links components with the redux store.
7. I would propse that the node endpoint is optimized by syncrhonizaiton of the client and server data via delta history.
