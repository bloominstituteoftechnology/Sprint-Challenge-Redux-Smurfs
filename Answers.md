1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign() -> copy object pass by value
Array.splice() -> copy array pass by value
Array.concat() -> returns a sum of the elements in the array
Array.map() -> iterates through each element in the array and returns something
Array.filter() -> returns the element in the array only if the condition is true

2.  Describe `actions`, `reducers` and the `store` and their role in Redux.
    What does each piece do?
    Why is the store known as a 'single source of truth' in a redux application?
store - holds the state, provides reducers to access and set your state, and allows for middleware usages of thunk and logger.
        Nowhere else in your application should you be assigning state (except maybe for a form that handles the local inputs)
reducers - dictate the type of change that is going to happen to your state.
actions - are conserved of functions that dispatch a type and a payload.
          The type is how the reducer will identify the correct action to take, and the payload is what changes will be made to the state.

3.  What is the difference between Application state and Component state?
    When would be a good time to use one over the other?
Application state - is contained within the store with the idea that it is immutable, and keeps it manageable throughout all layers of the application.
                    Use this with the store.
Component State - Stores the local state inside of a class component.
                  This should only be used over the application state, when you have a form that needs to handle its own inputs.

4. What is middleware?
    middleware is an extension of redux that provides access to handle the behavior of what actions do through the use of thunk.

5.  Describe `redux-thunk`, what does it allow us to do?
    How does it change our `action-creators`?
    it's a middleware to allow handling of asynchronous operations inside of our action creators, by using dispatch.


6.  Which `react-redux` method links up our `components` with our `redux store`?
    connect(mapStateToProps or null, { list of actions })