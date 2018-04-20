1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter and reduce are array methods that do not produce side effects. Object.assign is the method you would use to create a new object while also extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are functions which gets an event from the view and describes what actions are to be carried out.

reducers are functions are receive actions and use their desctiptions to update the state of the application without mutating the original state.

the store is the where the state of the application lives and it is known as the single source of truth in a redux application because the entire state of the application in put in an object and then stored in it.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that all parts of the application can access and it is useful for data that needs to be accessed by multiple components while component state is only accessible to the component in which it is defined and it is useful when only one component needs access to the state.

1.  What is middleware?

middleware is a third party extension that extends the capabilities of redux.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that extends redux capablilities making it possible for action creators to return functions

1.  Which `react-redux` method links up our `components` with our `redux store`?

the connect method

1. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?

I would not use the filter method as that does not actually delete the item. I would write a function to remove the item without affecting the other items in terms of id.