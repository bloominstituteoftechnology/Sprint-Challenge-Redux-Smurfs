1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

* `map`, `reduce` and `filter`. You use `Object.assign()`

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

* `actions` define the different ways that state can be manipulated in your state tree. Actions are then dispatched and handled in your reducers. The `reducer` is like a traffic cop that tells you where you need to go. They read the type of action and has you change state in different ways based on the type of action. All of these mutations are done on the `store`. The store is the single source of truth because every action done is being done to the store's state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

* Application state is when state is passed into the top-most component as props then held in state at that top level component. Component state is when each component _may_ hold their own state. An example of component state is when you have forms that hold their own input's state. Usually having application state is more than enough, however things such as forms must have their own component state.

4.  What is middleware?

* Middleware is software that runs between you inputting something and receiving your output.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

* `redux-thunk` allows us to asynchronously dispatch events to our store. This changes our action creators by allowing us to return functions instead of only objects that interface with our store.

6.  Which `react-redux` method links up our `components` with our `redux store`?

* the `connect` method.

7.  (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?
