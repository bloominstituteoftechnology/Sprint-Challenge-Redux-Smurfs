1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

	Three array/object methods that do not produce side-efects are:
		.map()
		.filter()
		(...) - spread 

	We use the spread syntax to create a new object and extend the properties of another.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	Actions are payloads of information that send data from your application to the store. Without actions, the store would not get any information from the application. Actions are plain JavaScript objects, that must have a type property that indicates the action being performed. Actions describes what happened, but not how it happens. 

	Reducers specify how the application's state changes in response to actions sent to the store. 

	The Store brings together what happened (actions) and how it happens (reducers). Store is responsible for:
		-holding the application's state;
		-allows access to state via getState();
		-allows state to be updated vis dispatch(action);
		-registers listeners via subscribe(listener);
		-handles unregistering of listeners via the function returned by subscribe(listener);


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

	Application state is global and component state is local. It would be good to use application state, when multiple components need access. As the parent, the data would pass down to all child components. 


1.  What is middleware?

	Middleware is code you place inbetween frameworks. It has been described as the glue that brings together the front-end network requests and the back-end data. 


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

	A thunk is a function that wraps an expression to delay its evaluation. Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.


1.  Which `react-redux` method links up our `components` with our `redux store`?

	connect() connects a react component to a redux store. 


