1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?
.map(), .filter(), .assign()

2. Which method do we use to create a new object while extending the properties of another object?
Object.assign()
3.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 
An action is the bridge between the app and the reducer. It is an object which acts as the source of information on how to change the app state.

A reducer takes information on changes provided by actions, takes the state, makes a copy, applies the changes and returns the copy as the new state.

The store acts as the container for the application state.

4. Why is the store known as a 'single source of truth' in a redux application?
The store is source of truth because it contains the state for the application.

5.  What is the difference between Application state and Component state?
Application state is immutable, component state is not.

6. When would be a good time to use one over the other?
When changes are needed to the core of the application application state is used. When changes are needed for a component such as a change handler for an input field, a component state is appropriate.

7.  What is middleware?
Middleware is the bridge between actions and the reducer. It allows actions to happen asynchronously.

8.  Describe `redux-thunk`, what does it allow us to do?
redux-thunk is middleware that allows actions to be more than plain objects by giving them more functionality. 

9. How does it change our `action-creators`?
It gives them the ability to use methods such as dispatch().

10.  Which `react-redux` method links up our `components` with our `redux store`?
connect() which takes state from store and maps it as props to the the referenced component.