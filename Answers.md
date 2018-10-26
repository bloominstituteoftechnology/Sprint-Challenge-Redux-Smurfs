1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, Filter, Concat.
Map.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are an object that has two properties type to specify what reducer you want to call and payload is the data you want to send to that reducer.

Reducers accept state and an action, and uses the action to decide how to update the current state in the store.

Store is a global application state that is accesible anywhere in your application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is available globally throughout the entierity of the app, while component state is only available onna compoenent level.

When you need the same data avaible through multiple components in diffrent sections of your app it would be a good idea to use Application State to avoid prop drilling.

1.  What is middleware?
Middleware in redux is an extra step that actions get sent through before it gets sent out to all the reducers. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-Thunk lets you send actions to reducers asynchronously. It extends our actions so they have the ability to consume promises.

1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect
