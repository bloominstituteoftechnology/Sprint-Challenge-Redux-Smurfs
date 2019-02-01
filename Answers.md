1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

1. `Object.assign()`, `Array.concat()`, `Array.map()` & `Array.filter()` and we also are using the spread operator to extend properties of another object.

2. Reducers specify how the application's state changes in response to actions sent to the store.
Actions are source of information that sends data from your application to your store. They are the only source of information for the store.
Store is the object that brings reducers and actions together, and it hold application's state, so I believe that's why it's called 'single source of truth'.

3. Application state is global, and the component state is local. So in the Redux we used 'store' to hold out global state for our entire application. So any component in out application can acces it.
So the component state exists inside that specific component and you can only update it within this component I think. But you can pass down the state data from this component to its children using props. 
So I think when you have a huge application with buzzillions components you need to use the global state, so you don't have to pass the state down from you App.js like hundred level deep.
But when you have a tiny baby application with not too much components and you need to pass it just a couple levels down, then it's okay to use local states. 

4. This one I'm not even sure how to describe it with my own words, so I just ctrl c, ctr v it from Redux docs.

Middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

5. I'm really not sure about this one. I was binging but still confused about it.

So when an action creator returns a function, that function will get executed by the Redux Thunk middleware. Something like that. 

6. Hmmm connect ? I belive. 