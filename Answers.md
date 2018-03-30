1. * Object.assign
  * Array.map
  * Array.concat
   We use Object.assign to create a new object
   
2. * Actions: are functions that fire on user events that communicate what you want to be done 
* Reducers: are  functions that take a action and the previous state and  handle the appropriate response 
* The store: is the place in the redux application where state is held, managed, and updated.
The store is the single source of truth because every piece of state is held in one place as opposed to on the individual component level.
   
3. * Application state: is accessible by the whole application and managed by the store. It is useful for more complex states or data that needs to be used by multiple components. 
* Component state : lives within a single component  This is useful if this state will be used by that component alone 

4. Middleware is a third-party extension that has an effect before the action dispatches

5. Redux-thunk : is a middleware that allows action creator to return a function. This opens up the possibilities of extra logic or asycn API calls before a dispatch.

6. The method connect() ... links a component with the redux store.