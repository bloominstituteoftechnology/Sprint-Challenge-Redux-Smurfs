1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Three methods that do not produce side effects are the array methods map, filter, and reduce. Each returns a new array and does not mutate the orginal. The method used to create a new object while extending another object is Object.assign().

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is the data repository which holds state. It is stored in a Provider HOC, which usually wraps the App component. This makes the store, essentially, the application's state and operates similarly to component state, but is now the data repository for the entire application. Actions and reducers work in combination to update the store's state. Actions are effectively handler functions which can be called within components to make a particular action occur, such as interacting with a server to return data. It is responsible for returning an action object which is passed to the reducer. The reducer is responsible for updating the store's state to include whatever is within the action. An action holds an action type and whatever data the reducer needs to update in the store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state is held within the component and to change the state you use the setState method. Application state is held in the redux store and to change the state you use dispatch. The best time to use component state is when you aren't using redux and/or you have components that have a local state that only should be added to the application state under certain conditions. A form component is a great example of when to use component state even when using application state. The form component's state merely is used to keep track of the values in the form's inputs. When the form is submitted, the application state can be updated to include whatever was in the form component's state. When using redux, most component state is unnecessary. Without redux, component state is all there is.

1.  What is middleware?

    Middleware is code that runs inbetween other bits of code that allows for additional functionality. It is usually imported and injects itself somewhere within the application. In the case of Redux, thunk is one type of middleware.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk is a small bit of middleware that allows us to have access to the dispatch method within our action creators. Inside our action creators we return a function instead of an action. This inner function that we return has access to dispatch which allows for a more nuanced approach to development. For example, a common usage of action creators is making calls to a server. Without thunk, you can make the call and return the  action. With thunk you can return a function that dispatches several times depending on the state the call is in. We could dispatch for LOADING, SUCCESS, and ERROR.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect()()
