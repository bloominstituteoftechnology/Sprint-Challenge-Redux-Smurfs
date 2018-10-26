1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map, .filter, and .concat do not produce side-effects. To create a new object while extending the properties of another object, we use Object.assign(). It can take 3 parameters. First {} is used to make the new object. Then the the name of the object whose properties you want to extend. And lastly any specific properties that you want to change.



2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is where the state for the entire redux application is contained. We use react-redux to get our react application connected to the store. Because the store is read only, we can modify the state of the application by using actions. Actions are packets of information that have an action type and some data, and they modify the application's state. Reducers are pure functions that return an object that can be re-implemented later, and they never have any side-effects. They basically calculate the new version of state based on the current state and action. The store is known as a single source of truth because the state of the application is inside an object tree with a single store.



3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    The application state is global while the component state is local. With application state, it is important to keep in mind that you have to keep it in sync with all the layers of the application because if it isn't, there will be bugs. It's better to use application state when you don't want to write on your store object. This is because the application state is immutable, so you would just clone the state object, modify it's clone, and replace the original with a new copy.



4. What is middleware?

    Middlware is an extension for redux that is used to add new functionality. Some of these functions include the ability to stop actions, forward untouched actions, dispatch different actions, and dispatch more than one actions. It runs in order and is added to the store when created.




5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    Redux-thunk is a middleware. It allows you to handle asynchronous operations. It changes our action creators by returning functions that have access to the dispatch() method from the store.




6. Which react-redux method links up our components with our redux store?

    The dispatch method links our components with our redux store.