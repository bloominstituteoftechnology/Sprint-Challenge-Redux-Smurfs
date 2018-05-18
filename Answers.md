1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Object.assign, Spread Operators, Array.concat()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are events of datathat are sent to the store to manipulate our objects state
Reducers are functions that listen for Actions and add them to the existing state
Store is the object in which our state exists, our single source of truth
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the state tree object that can be accessed anywhere within the application while Components' state can only be accessed by passing data to it manually. It is better to use Application state when a good number of components need access to it. Conversly, when only one or two components are used, Component state is recommended.
1.  What is middleware?
It is 3rd party software that adds more functionality or can generate more information to an application. In Redux, it is used between the actions and reducers to provide logging, reporting and communication to an API to allow asyncronus operations.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It is middleware that is used to make action creators which are functions rather than an action. It can be used to delay an action dispatch or dispatch when a condition is met.
1.  Which `react-redux` method links up our `components` with our `redux store`?
import { Connect } from 'react-redux';
