1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

ans: Array.filter(), Array.map(), Array.concat().

we use Object.assign() to create a new object while extending the properties of another object

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are JS objects that contain a type and payload(data).

Reducers takes a state and an action as arguments. They are responsible for altering pieces of state with the data from actioins.

The store is a immutable JS object that represents the  Global state of a web app.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is responsible for holding  data that can be injected into other components and that is used by other components within our App.

Component state is local state stored within a component.

We use or update Application state with data that are relevant to other components or our Application as a whole.

we use component state or local state for data that do not have global impact such us handling new input.

4.  What is middleware?

They are third party add-ons or package used to extend functionality of our Rudux app.  

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is a middleware that allows us to dispatch() multiple times.

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect() 
