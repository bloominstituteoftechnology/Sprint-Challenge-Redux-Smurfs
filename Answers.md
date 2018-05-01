1. Object.assign({}, object were assigning)
    {...Object, val: newVal-Value}
    .map()


2. Actions have types, these types relate to how the reducer is functioning. Actions pull information and are referenced in dom JSX to ten be passed to the reducer
reducers store something we are tracking, the reducer maintains a certified copy of that "something" object value etc. to be used throughout the application. it is update based on actions
The store is a concept that connects the reducer value and the actions to all of the applications. it makes state and actions available throughout the application through this.props.

3. application state is what the reducer controls and is called the store. component state is created and referenced within that component and is not available throughout the application

4. Middleware is a third party extension to redux that lives between an action that was dispatched and the reducer. 

5. redux thunk allows us to return a fuction instead of an action. it allows us to perform Async actions with dispacth and getState Parameters

6. connect links components with the redux store

7. I would recommend the delete function returning a new update version of the array. I was not able to get the delete function to work.