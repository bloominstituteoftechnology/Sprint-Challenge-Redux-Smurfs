##Answers

1. .map, .filter, and concat. Map allows you to create a new object
2. actions create action creators which, when triggered are sent through the reducers which will do some javascript and return
an updated state to the store.
3. Application state holds the data of the application and component state handles data that will only affect the UI. 
4. redux-thunk allows us to use middleware which will filter the data before it reaches the reducer.
5. connect