1. Object.assign, array.slice, and array.map. The method we would use would be Object.assign.

2. 
- Actions have functions that set the action types, and handle any API interactions (axios.get/.post/etc).
- Reducers import the action types, set an initial state, and handle the timing of the different actions interactions with the state and properties of the state.
- The store connects the reducers and actions to the components, so that the components can utilize and interact with the properties of the API passed from the actions, and the state from the reducers.

3. Application state is the state of the data as it flows in from the API and gets sent back out to the API, so the app state needs to be whole or else the exchange will result in an error. The component state is the state as it exists and gets modified within the different components of the Application.

4. Middleware adds smoother routing when dispatching actions to reducers, and also includes logging, and crash reporting.

5. Thunk allows action creators to return functions as opposed to just an object. In example, it is needed to handle axios methods within the action creators.

6. The Provider method imported from react-redux.

