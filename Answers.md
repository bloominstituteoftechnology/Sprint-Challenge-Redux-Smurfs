1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- Array.map() Array.filter() Array.reduce()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- The store is the location redux creates to hold the main state data.
- actions send data to your store
- reducers are where we tell the store how the state will change

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is global in redux, any component can subscribe to it, and read and write to it with props actions and reducers.
- Component state is stored inside the component. It can be used when it is the only component that needs that data. One example is storing form input data before sending the completed data to an action

4.  What is middleware?

- middleware is code libraries that can be used to automatically provide additional services to a software.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- redux-thunk is a library that allows us to use to make async calls in redux

6.  Which `react-redux` method links up our `components` with our `redux store`?

- the connect method is what we use to link out components and redux store.
