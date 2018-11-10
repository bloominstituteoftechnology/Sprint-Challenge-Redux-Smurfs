**1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?**

Oh, I'm assuming you mean pure vs impure functions. 

Okay, pure methods:

- `forEach` 
- `concat` 
- using a spread operator

We use `map` to create a new object with the same properties.

**2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?**

Actions are packets of information that send data from your function (or your app, I guess, is more accurate?) to store. Store is an object that holds all your app's information, and is the single source of truth because it's not overwritten directly -- you just have functions that pass information in and out of it. It's a black box, sort of. The only thing that can update state is a Reducer, and the only thing that the Store talks to is State.

**3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?**

Application state is global state, and is available across your app, while component state is only available inside that component. Using one or the other depends on whether data inside your component is needed by some other part of your app.

**4.  What is middleware?**

Middleware made sense to me after realizing it allows us to "hit pause" on our application's flow -- state -> UI (input) -> action -> reducer -> store -> state. Middleware code sits between the input and the responding action and pauses things, allowing us to have a log of what's happening, say. (Which is how Tommy would invariably debug his app.) Another example: we could (I think?) also use middleware to slow down the app's flow, if we wanted to.

**5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?**

Thunk lets us pass functions that have access to dispatchers, not just an object. It lets us have multiple actions from a single catalyst (i.e action input)

**6.  Which `react-redux` method links up our `components` with our `redux store`?**

Connect!

