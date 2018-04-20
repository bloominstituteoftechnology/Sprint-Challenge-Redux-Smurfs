* Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  * Arrays:
    * Creating a new array using a spread operator
      * `newArray = [...oldArray, 'newEntry' ]`
    * Removing things from an array
      * `smallerArr = oldArray.filter(element => filteringCriteria?)`
    * Creating a copy:
      * `Array.slice()`
  * Objects
    * Creating a new object from an old object and new data:
      * `Object.assign()`
* Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  * Actions - And action is an object that has a type and a payload of information. They are the way that information is passed to the store
  * Reducers - Reducers take an action and the state and make changes to the state based on the action type. They are pure functions.
  * The Store - is the applications state kept in one central location. It holds the state and allows access by the application components. It is the single source of truth because there is only one store, and it is read-only. Actions can only be performed by reducers (which are pure functions).
* What is the difference between Application state and Component state? When would be a good time to use one over the other?
  * The application state is kept in the store and can be accessed by any component that is connected
  * The component state is state that is kept inside the component and can only be accessed by that component or its children.
  * A good situation for utilizing component state is forms. Any data that the component needs to be aware of that doesn't need to be permanently stored in the state.
* What is middleware?
  * Middleware is code that lives between a framework that generates a request and a framework that responds. We used middleware in between axios and redux. Thunk allowed us to call dispatch from within actions.
* Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
  * Thunk allows our action creators to return functions instead of objects. This allows us to return dispatch functions and delay the action dispatch depending on condition.
* Which react-redux method links up our components with our redux store?
  * MapStateToProps
