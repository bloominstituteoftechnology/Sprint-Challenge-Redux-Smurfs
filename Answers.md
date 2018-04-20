1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 

Object.assign() - Can be used to create a new object while giving new vaues of another object.

.map() - Can be used to go through a entire array, but creates a new array for use and can have it's data changed as needed without affecting the original array.

.concat() - Can be used to combine two arrays into one new array.

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - Is an object that contains data and sends it to the store.

Reducer - Changes how the actions affect the state changes to the store.

Store - Uses actions and reducers to update the state data and only one is ever created.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Appication state can be changed by any component, while the component state itself can only be changed by the component it's on. Depending on the state you need to affect, it's important to know which one to use.

4. What is middleware?

Third party extentions that is put in your code to provide special features that can help with development.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

It converts action-creators into functions instead of objects. 

6. Which react-redux method links up our components with our redux store?

MapStateToProps is the method used.