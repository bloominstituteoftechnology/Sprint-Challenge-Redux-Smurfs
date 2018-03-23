1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three JS array/object methods that do not produce side-effects are:
a) Array.map, b.) Array.concat c.) Object.assign

Object.assign will create a new object while extending the properties of another object.

2.  Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

ACTIONS - Actions send data from your app to your store. They are the sole source of information sent there. In addition, they are JS objects, and MUST have a <type> property that denotes what action is being performed.

REDUCERS - Reducers specify HOW that app's state changes in response to the actions.

STORE - The store is what contains the state tree of the applications. The state inside of store can only be changed by dispatching an action to it. A store is an object with methods on it.

The single source of truth referes to the state tree of an applications. I cannot be rewritten or reshaped in any way.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is global. The component state is local. Component state can only be updated within that componnent and passed down to its children via props. Any component can access application state if it is hooked on to it via <connect>.

4.  What is middleware?

It is simply a function which is invoked after an action is dispatched but before a reducer takes care of action. Redux middleware is used for logging, crash reporting, talking to an asyn API and routing.

5.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-thunk is middleware used to handle asyn actions.

6.  Which react-redux method links up our components with our redux store?

connect()
