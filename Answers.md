1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
* array.slice() array.map() and array.filter().  Object.assign().
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
* Actions handles the type of action that happens.  It then sends a piece or more data to the reducer.  The reducer then handles the updating of the store.  The store just holds the whole state of your application.  The store is known as a single source of truth because it is just one js object.
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
* Application state is the global state.  You can access the state anywhere.  Component state is local state.  You can only access the state within that component or pass down the state via props to its childrens.  Small application I would just use component state.  Large application I would use Global because it is easier to manage.
4.  What is middleware?
* Middleware is that extra data or code that runs between the action and reducer.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
* Redux thunk allow us to do asyc calls.
6.  Which `react-redux` method links up our `components` with our `redux store`?
* That will be connect method
