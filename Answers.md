1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- .map .filter and .forEach will all produce a new array and will not effect the original array. We normally use Object.assign but the spread operator will work as well.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are functions that return an object depending on which action type is being read. The reduce will take in these actions and will change the state based on the action type that is given. The store holds the state on a global scale which is accessible from every component.  

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is accessible to any component using Redux and you are able to bypass passing props around using this method. Component state only exists on whichever component it is created, if another component needs that state it must be passed down as props. Usually component state is easier to use on smaller applications because you do not have to boilerplate anything. Redux takes a lot of set up but is very beneficial when there are many components and it becomes difficult to keep track of props.

4.  What is middleware?

- Middleware allows us to extend the functionality of Redux. We can import and apply different types of middleware that we want to use such as thunk and logger. Middleware allows us to interupt our data flow and add different types of functionality to our actions.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- redux-thunk allows to to us async operations. It allows us to control dispatch from directly inside of our action-creators.

6.  Which `react-redux` method links up our `components` with our `redux store`?

- connect