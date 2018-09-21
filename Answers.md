1.	Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
	* `.filter()`
	* `.map()`
	* `.concat()`
	* You can use either `Object.create()` or the spread operator `{...}`.

2.	Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
	* `Actions` are plain javascript objects that act as payloads of information that you can send to the store. Actions are the only way to change the state housed in the store.

	* `Reducers` specify how the state in your store changes according to specific actions sent. Reducers take in an action and output a state based on that action.

	* The `store` is the single source of truth in your application. It holds the state tree of your application.

	* The store being a `'single source of truth'` means that there exists only 'one way data binding'. In other words, the data representing your state exists in only one place (your store) and everything else just receives this data as props. If you want to change that data, you have to change it in your store first, then let those changes cascade down to your components.

3.	What is the difference between Application state and Component state? When would be a good time to use one over the other?
	* Your `Application state` is a global cache of data that resides at the top of your tree where the store is. This data can be passed down to any connected component.

	* Your `Component state` is a local cache of data that resides inside your component. This data can be passed down to its children components.

	* If the data needs to be shared amongst several components, then it is a good idea to house that data inside your Application state. If the data is likely to change quickly or only represent a small change inside an individual component (such as the case when you type characters into an input field), you can just store that data locally inside the component's state.

4.	What is middleware?
	* `Middleware` acts as a middle man between the dispatching of an action and the reducer receiving that action. You can use middleware for things like logging actions and making API calls.

5.	Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
	* `redux-thunk` allows us to make action creators that return a function instead of an action. This allows us to delay the dispatching of an action and make asynchronious calls, or to only dispatch the action when certain conditions are met.

6.	Which `react-redux` method links up our `components` with our `redux store`?
	* `connect`
