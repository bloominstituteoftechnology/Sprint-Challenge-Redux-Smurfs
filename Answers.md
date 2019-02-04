1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    - Array.forEach(), Array.map() and Object.create(). We use Object.create() to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - I can't really describe these in my own words right now but with more practice I'm sure I will one day. I am getting the definitions from the Redux documentation.

    - Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

    - Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

    - The Store is the object that brings them together. The store has the following responsibilities:

            - Holds application state;

            - Allows access to state via getState();

            - Allows state to be updated via dispatch(action);

            - Registers listeners via subscribe(listener);

            - Handles unregistering of listeners via the function returned by subscribe(listener).

    - It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    - The application state is global, and your component state is local and a good use case to have local state would be to store the input values in a form.

4.  What is middleware?

    - Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    - Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

6.  Which `react-redux` method links up our `components` with our `redux store`?

    - Connect
