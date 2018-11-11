1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map is one method that does not change the original array. This method is very useful in Redux. It is the method that allows access to properties.

.filter is another method that does not affect the original array. It can be used to filter specific data chosen by the user.

.reduce is yet another method that can be used that does not change the original array. It is useful to gather and reduce data down to one sum or item.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions refer to instructions that are then read and carried out by reducers. The store is like a library that components can access for data and information that is needed for a webpage. The store is the one place that most of the information is held, thus any component will get its truth/information from the store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is related to the store in redux. It is a state that can be accessed by every component. It should be used as the primary tool when working with complicated React projects.

Component state deals with a closed state that is created within a component. Its information can be passed down, however it is not directly accessible by all components. Component state works well with simpler projects, due to Redux's complicated set-up. Another use for local state would be for temporary information that is held for form data. This kind of data would not be needed on a global state.

1.  What is middleware?

Middleware takes the instructions given by actions, and modifies them. Once the middleware is done, the modified instructions are then sent to the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is primarily for asynchronous calls. This helps our action-creators to be able to account for different scenarios when calling information from an api. The three main parts to these action calls are the loading phase, the success phase, and the error phase. Redux-thunk uses dispatch to account for these three main processes, and change the webpage accordingly.

1.  Which `react-redux` method links up our `components` with our `redux store`?

The connect method is the one that bridges the gap between the store and components. It takes in a mapStateToProps object, an action, and a component to link Redux components and the store.
