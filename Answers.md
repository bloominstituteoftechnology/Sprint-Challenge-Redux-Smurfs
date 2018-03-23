### 1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`Array.prototype.filter()`

`Object.entries()`

`Array.prototype.map()`

-------------------------

`Object.assign()`

### 2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`Actions` - This is the start of the journey towards creating a store. Actions are packets of information (specifically, JavaScript objects) composed of two pieces, a type, which is a classification or description that will be given to a reducer, and an optional data payload, which will be given to the reducer to act on.

`Reducers` - The next step is for the reducer to sort through the information it has received so that it can know exactly how to create the store. A switch statement or a series of if/else statements guide the process, executing a particular set of instructions depending on the type contained in the action. We then move along to the return statement, which adds the result to the state.

An initial state is passed into the reducer as well as the action, this state is what is being modified. Due to the certainty around the initial state, and the fact that reducers don't modify it directly, reducers can be considered pure functions. The benefit to this is that reducers can be run synchronously without worry that the resulting data will not come out as expected. A common practice when working with multiple reducers is to create a single 'master' reducer that combines all the others.

`Store` - Finally we arrive at the store, the single source of truth in redux. The reason it is referred to this way is that all data fundamentally flows to this central repository. Components may hold their own state independently, which can be useful, but ultimately anything of value to the whole application will find its way through the reducers and back to the store. The only other thing to say about this part of redux is that we may have pieces of software called 'middleware' between it and the reducers. This software can add functionality like logging to explain what is happening with the state.

### 3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is accessible by any part of the application, assuming it is appropriately connected to the store. Component state is private to that component. You should use the store when you think the data will be used by multiple components, otherwise, you should use Component state. This will keep things nicely isolated to where they are necessary, and prevent you from polluting the store.

### 4. What is middleware?

As stated above, it is a layer of software which sits between the reducers and state that can provide additional functionality to your application.

### 5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is middleware that allows your action creators to return a function. This allows you to delay a dispatch that would normally happen immediately, by waiting for a condition, or even discarding it entirely. This makes it ideal for dispatching the results of a promise.

### 6. Which `react-redux` method links up our `components` with our `redux store`?

The `connect()` method.
