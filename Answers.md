1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

	-Reduce, Map and Filter all create seperates copies of the original
	data before mutation, which itself is cosidered a side effect. The 
	Object.assign method allows a copy of the object to be created which
	extends all properties of the original object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux 
application?
	-Store: The store is a javascript Object where all states in an app reside.
	AKA "Single source of truth."

	-Actions: Actions are the data sent to the 'store', actions are objects
	with a Type and a Payload, action creators are functions that return an
	action object

	-Reducers: Reducers are called to tell an app how to react to a 
	specific action, depending on the action the state is changed.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
	-If the state is only used in one place, then it's best to use the
	Component State sense there is only one thing that needs to be "watched."
	If there are multiple components that need to share state, it would be best
	to use the Application state when making a call and getting data returned.

4.  What is middleware?
	-Middleware is the black magic of what happense imbetween data coming from
	the server to the client, before this data reaches the client it passes
	through the 'middleware' which will perform some sort of action or dispatch
	multiple actions.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
	-Redux-Thunk is a type of middleware that allows for multiple manual
	dispatching when triggered

6.  Which `react-redux` method links up our `components` with our `redux store`?
	-The connect method will link the component with the redux 'store' and
	allow for access and state as props within the component.
