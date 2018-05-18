1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.reduce, Array.concat, Array.filter. Object.assign creates a new object by adding properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is a state, it is where everything is stored and managed from. It holds all reducers and updates itself by dispatching actions to reducers. In redux we can have only one store. Actions are the actions we can do by interacting with apis, they are sent to Reducers via Action Creators and based on their TYPE and PAYLOAD they can affect data in app. Reducers are between Store and Actions and their job is to handle or the data manipulation.
Single Source of Truth means that all data is stored in one place in Store and it can only change one way - via Actions and Reducers.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the global state of application that is held in the Store. Component state is just a local state/scope to that particular component. Application state should be used with larger data, especially if it needs to be passed to other Components. Component state should be used for managing inputs in forms, toggling etc.

4.  What is middleware?

Middlware is between Actions and Reducers. It handles an action and do some changes to it before it arrives to Reducer as a middleman. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows us to use asynchronous Javascript, with the help of middleWare we can return functions from Action Creators instead of just simple plain objects by using dispatch.

6.  Which `react-redux` method links up our `components` with our `redux store`?
Connect

