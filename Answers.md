1* the 3 methods are filter(), reduce() and map(). 
   the object  method is Object.assign()


2* actions : representation of the changes that take place  in the application ( the user wants something and does  somethings on the app , the actions starts  to inform the reducers to change the initial state and give new state). reducers will reduce the action ( the description of the changes ) into a new form of a state( takes the initial state of the app and the  actions , then read them and obtain their payload and  create new state ). 
3* application state (data or requesting recourses from an api)is the state stored in the redux store and component state (view state like input and toggle switches) is the state stored in the component.
4* middleware is the ability of taking a piece of functionality and extend the abilities of that functionality,
we  take  redux and extend it to include logger and thunk.
5* redux thunk is the ability of using redux asynchronous redux and dispatch actions in different times one after one, redux thunk also enable us to return a callback actionCreator.
6* connect()() does connect the components with redux store ( the application state)

