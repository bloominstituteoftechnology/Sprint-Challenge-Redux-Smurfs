1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 

  We can use .map(), .filter(), and .concat() methods to create an altered version of an array/object, without mutating the original object. We use the .concat() method to create a new object that contains all the properties of the original object, plus some additional properties. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions- Actions are small objects that are used to convey information to our app's nerve center about changes we want to see in our app. Clicks, form input, key presses, etc. trigger action creators, which are functions that generate action messages. Basically, actions are the way child components send messages to the mothership when certain things happen. It's up to the mothership to decide what to do from there.

  Reducers- All actions are handled by reducer functions. Reducers take in an action and the previous state as arguments. The reducer function defines how the state needs to look, in order to reconcile the old state with the new information (action message). It returns a new state object, which contains the properties of the old state object plus any changes that need to be made. 

  Store- The store in Redux is used as state, that all of the components can use as a central hub of information. I think of it as a mothership. It's a place where child components can store data that can be used all over the app. 
  
  Ordinarily with React, there was no direct way for a component to send data back to their parent. The parent could pass down callback functions, which the child could use to change state in some way. But this quickly becomes tedious with large scale apps that might have hundreds or thousands of components. 
  
  Redux makes it much easier for a child component to send simple packets of data to the "mothership" app. The root app then decides how to change the store in order to reflect the data/action message coming from the child. In this way, the store object is used to communicate across all our components. Rather than having multiple states stored on multiple class components, Redux enables developers to use one central state object called the store, which can update all components across our app. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Component state is data that is stored for use within one component and its children. For example, if you have an input text component, you might store the text in the component's state. You can pass that data down as props to child components, but you'd have a tough time passing that data to unconnected components. It's possible, but it might take some elaborate wiring and callback functions. 

  The Redux store is an example of application state. It's an object stored on the root component of an application, that is a central source of information for all sub-components in the app. It's much more straightforward of a way to communicate data from one component to another, rather than invoking convoluted callbacks and engaging in endless prop-drilling.

  There is a time and place for both types of state, and it's up to the developer to decide when to use each type. 

1.  What is middleware?

  I think of middleware as a gatekeeper for action objects. Before an action object is passed to the reducer stack, the middleware has first dibs on the action object. The middleware can do anything it wants in response to the action object, including returning a completely different action object, returning multiple action objects, or passing the object unchanged. It's really a powerful part of the Redux cycle.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk allows us to add asynchronous functions to the dispatch() method. Dispatch() normally happens under the hood, but redux-thunk gives us direct access to it. We can add multiple action dispatches to one dispatch method call, which trigger at various points asynchronously. So basically, one dispatch can handle multiple possible scenarios that may come up over time as an app handles a particular request. It could render an hourglass animation when it first starts loading, and it could also render a message in case of a server error. These events are both related to the initial request for data, but they happen at different times. The error message may never happen at all. Redux-thunk allows us to build dynamic action creators that can handle multiple scenarios, rather than just spitting out an action message.

1.  Which `react-redux` method links up our `components` with our `redux store`?

  The connect() method automatically links up our components to the redux store. 