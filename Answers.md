1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object 
while extending the properties of another object?

	filter()

	map()

	reduce()

	Object.assign(): allowas us to define a new object with its own properties along with properties from another object. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	Actions: Retrive data from user inputs and interaction or from a dedicated data server.

	Reducers: Dfine Store by managing our state. Reducers are the only way data can be appended or dfined in the redux 	store.

	Store: Stores  the current status of our state which can be passed to components indivdually rather then passing state 	down through our entier 		componenet tree. 

	The store is our singe source of immutable data and for this reason it is known as the singe source of truth since only 	reducers can 
	mutate data or append data each component given access to the store has the same data. 
  

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
	
	Application state is global and every component has acess to it. 

	Component state is local and only that component has access to it and can be passed down via props. 

1.  What is middleware?

	Redux middleware provides a way to interact with data before it reaches the Redux Store, allowing use to manipulate the data before putting it in 	state or setting conditions for data in order for it to be stored in state.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

	Redux thunk middleware allows us to create actions that return a function, certian conditions can be set in our middleware to ensure only the data 		that meets those requirements gets passed.

1.  Which `react-redux` method links up our `components` with our `redux store`?


	import {connect} from 'react-redux';

	export default connect(mapStateToProps)(componentName )