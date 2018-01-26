1. Name 3 JavaScript Array/ Object methods that don't produce side effects. Which method do we use to create a new Object while extending the properties of another object?
	- Object.assign
2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a Redux application? 
	- Actions - define tasks our application can carry out
	- Reducers - allow us to implement tasks defined in our actions files
	- The store is an object that allows us to store all of our state on a single object. We create new instances of this object each time the state is updated. This allows us to have a centrally located state object as opposed to disparate state objects affiliated with individual application components.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
	- Application state: All of the state of the application is stored on a single Object. If we need stateful components to feed information to one another this design pattern is useful.
	- Component state: Each component has a separate state object. If we do not need to pass state objects in both directions between components then we can use this design pattern.
4. What is middleware?
	- Middleware allows us to manage asynchronous tasks.
5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
	- Middleware that allows us to manage asynchronous tasks. Our action creators no longer have to return a single object.
6. Which react-redux method links up our components with our redux store?
	- Connect.