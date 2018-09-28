1. Name 3 JavaScript Array/Object Methods that do not produce side-effects?
   Which method do we use to create a new object while extending the properties of another object?

	array methods: map, filter, reduce, spread
	object methods: assign, spread

2. Describe actions, reducers and the store and their role in Redux.
   What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	Actions are payloads of information that send data from your application to your store.
	They are the only source of information for the store. You send them to the store using store.dispatch().

	Reducers specify how the application's state changes in response to actions sent to the store.

	There is only single store in a Redux application.
	The Store is the object that brings Actions and Reducers together. 
	State responsibilities:
		Holds application state;
		Allows access to state via getState();
		Allows state to be updated via dispatch(action);
		Registers listeners via subscribe(listener);
		Handles unregistering of listeners via the function returned by subscribe(listener).

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

	Application state is stored globally. Any component that needs access to a value may subscribe to the store and gain access to that value.
	Component state is stored locally within a component. When it needs to be shared with other components, it is passed down through props.

4. What is middleware?

	Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

	Redux Thunk middleware allows you to write action creators that return a function instead of an action.
	The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 



6. Which react-redux method links up our components with our redux store?

	connect
		






