1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- map, filter and reduce. Object.assign()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- The store is the place where your state is being held. The state is not mutated directly. Actions are commands that are created by the outside world (user or API), those actions are then sent into a dispatcher (part of redux). The dispatcher then sends the actions to the reducers. The reducers do the actual business logic of the action. The store is the single source of truth because it's where all the state lives and nothing updates it directly.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state I believe the state of the entire application while component state is the state of specific component. It seems that sometimes we'll want to keep state for the entire application, while others we will want to keep it just at the component level. It's not clear to me why we would want to keep anything at the component. I believe in a single source for state. 
1.  What is middleware?
- Middle ware sits between our actions and reducers. It allows us to modify our actions or extending them before forwarding on the object to the reducer
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- Redux is synchronous by design. Redux-thunk introduces a pattern that will allow for asynch calls within the synchronous environment of redux. The action creators become promises if using a library like axios for the async API calls.
1.  Which `react-redux` method links up our `components` with our `redux store`?
- connect()
