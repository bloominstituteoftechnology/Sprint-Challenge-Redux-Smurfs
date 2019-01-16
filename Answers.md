1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

The array.map method is a method able to create a new array while extending the properties of the original array.
The array.filter method acts like map, but only allows items that meet a particular conditional to be added to the new array. Filter & Map do not mutate the original array.
Object.create is an object method which creates a new object but maintains the proptype of the original object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store - Holds the state of the app. 
Reducers - Pure functions, take the current state and an action as parameters and then returns an updated state. Every reducer is unique and affects only one property of the app, reducers define how the state should change when an action occurs.
Actions - JavaScript objects with 2 keys: "type" & "payload". "Type" indicates what type of action is being performed while "payload" is a key value that corresponds to the data being passed into the action. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the state of an entire application (global), made accessible by a flux library like redux. Component state refers to the state of a particular component (local), and is only accessible by that component and its children. Application state is best suited for large scale applications or situations where state must be accessed by different components that my not necessarily be in the same "family" i.e, components that do not have parent/child relationships through which props (component state) would be best used. 

1.  What is middleware? 
Middleware is software whose function is bridge the front and back end.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows for the coding of action creators that return functions instead of actions. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

The "connect" method links our components to the redux store.

Jerrard Smith