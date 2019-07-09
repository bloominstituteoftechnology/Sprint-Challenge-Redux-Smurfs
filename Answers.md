1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

array.map creates a new array and does not mutate the original array.

array.slice returns items in the array without mutating the original array, as opposed to array.splice which does mutate the array

array.concact adds items to the array without mutation.



1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store is the "heart" of the application, and it's where the state lives, as it is passed into the reducer, which has the state, as well as the action, passed as 2 args in a function.
the action is actually an object, with a type and a payload, when passed in to a reducer, it will perform a function based on each different action's type.



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is just stored in only one place, where it could be mutable, using the .setState method, however in redux, you use component state, where it is immutable and will not change the original state.That is why people use redux for immutability when scaling a larger application.


1.  What is middleware?
 
  middleware is the medium point between the action and the 
  reducer which will change the action before it goes to the reducer, like logger, so it will console.log each action as it goes, so you can see the before and after states.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
it is a middleware,  to do asychronous JS when we do API calls. It is good to use  when we use axios.post and get.

If the thing being passed is an action, it will pass it in to the reducer as an action, but if it is a function, it will invoke that function instead.


1.  Which `react-redux` method links up our `components` with our `redux store`?
connect, it is a higher order component.
