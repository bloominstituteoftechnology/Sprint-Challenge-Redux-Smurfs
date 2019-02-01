1 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions is a plain object that represents an intention to change the state.
reducers is a function that accepts an accumulation and a value and returns a new accumulation.
because it's the state of your whole application

2 What is the difference between Application state and Component state? When would be a good time to use one over the other?

your application state is global and your component state is local.

3 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
redux thunk is a middle ware that lets you call action creators that return a function instead of an action object.
