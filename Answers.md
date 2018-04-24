1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Object.assign()
    a spread operator (...)
    array.concat()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    ACTIONS are payloads of data/information that are sent to the store to manipulate.
    REDUCERS are functions that listen for actions and, when triggered,take that information and add it to the existing state.
    STORE is an object where state exists.

    The store is immutable meaning no changes are directly made on it. It can only be changed when copied and updates are made to that.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the state tree object that can be accessed anywhere within the application while Component's state can only be accessed by passing data to it manually. It is better to use Application state when a good number of components need access to it. Conversly, when only one or two components are used, Component state is recommended.

4.  What is middleware?
    It is 3rd party software that adds more functionality or can generate more information to an application. In Redux, it is used between the actions and reducers to provide logging, reporting and communication to an API to allow asyncronus operations.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    It is middleware that is used to make action creators which are functions rather than an action. It can be used to delay an action dispatch or dispatch when a condition is met.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    import { Connect } from 'react-redux';

7.  (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?
