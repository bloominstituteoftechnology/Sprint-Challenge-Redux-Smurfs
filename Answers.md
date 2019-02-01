1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Without any side effects we are using mao, filter and concat. To create a new object while extending its properties we use Object.assign or a spread operator [...].

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

ACTIONS are the events that are triggered by the UI that communicate to the type and payload of the REDUCERS.

REDUCERS are used for managing state connects actions into corresponding state changes. It is called a finite state machine and the changes are achieved wit SWITCH statement.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is most likely to be managed by REDUX and ia the record data that application is interacting with. Application state is good for updating data that will be processed to the server.

Component state is like a local record of information that is tied to the particular component. Component state is good for managing UI changes until user makes changes by triggering the action.

1.  What is middleware?

MIDDLEWARE extends REDUX functionality with new capabilities REDUX-THUNK and ACTION-CREATORS.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

REDUX-THUNK is middleware of REDUX returning a function instead of an object in the ACTION-CREATORS. It does that by using method DISPATCH.

1.  Which `react-redux` method links up our `components` with our `redux store`?

import {connect} from 'react-redux';
connect (mapStateToProps or null, {action1, action2...}(component));