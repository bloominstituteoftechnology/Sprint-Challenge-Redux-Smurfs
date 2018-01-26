* 1) Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
* To avoid mutating the store data, we need to produce a new object or array. To do this we can use Object.assign, concat, or array methods such as filter, map, or reduce to produce a new object or array that does not change the original one.

* 2) Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
* The store is where we keep all of our data - where we store it. Rather than separate bits of state as is normally done in React, Redux uses one large main store to hold all the data.
* Actions are the first step in the process. When a request is initiated from the view, the actions receive it and fire off the proper directives to the reducers.
* Reducers receive the directives from the actions, route them accordingly to make the necessary changes, and update the store to display those changes.

* 3) What is the difference between Application state and Component state? When would be a good time to use one over the other?
* Application state is the overall data of the application, housed in the store.
* Component state is a small bit of data in the component that is handled locally within that component because it is not needed anywhere outside of it, so it does not need to go into the store.
* You would use application state for the applications main data, such as the todos in a todo list app, while component state might be used in that same app to handle input fields as they receive a new todo and process it before sending it to the store.

* 4) What is middleware?
* Middleware is software that "gets in the middle" between actions and reducers. It intercepts every action and modifies or cancels it as needed.

* 5) Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
* Redux-thunk is middleware that looks at every action as it's passing through the system and, if it's a function, it calls that function.

* 6) Which react-redux method links up our components with our redux store?
* Connect is used to link components to the store. The connect statement has two arguments: the first is a set of parameters (including functions and objects) that will be passed as props to the second argument. A successful connect will attach the component (the second argument) with those parameters to the store. For example:

connect(mapStateToProps, { getFriends, updateFriend })(UpdateFriend)

This will pass mapStateToProps and the methods (not sure if that's the right word) getFriends and update Friend as props to the UpdateFriend component and attach that component to the store.