1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Filter, Map and Reduce all return a new array and thus will not mutate the original. You can use the Object.assign() method to create a new array and use the spread operator to clone the contents of the original into the new array.

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

ACTIONS are bits of information with an action type (ex: DO_THIS_THING) and the data, "payload", we associate with that action. They get fired off upon an interaction with the user / the client side. They are objects that in turn return an object.

REDUCERS act as the middle man between the action and the store/state. They are pure functions and interperate the action by two arguments: the present state (sometimes previous state, too) and the action that they receive. The action type describes what this is request is all about and the data is what supplements that action. Reducers compare the two together and calculates the changes to happen. Key note is that reducers don't touch the state directly but rather they provide a new object to preserve immutability.

Lastly, the STORE represents the overall state for the entire application. The store could be thought of as global state, rather than state representing individual components. Using a Provider tag, we wrap the top-level component, usually the <App> component so it can access the top level of state. STORE state is great for scaling up as it squashes out a lot of state conflicts.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state tracks every change made in the application and houses this information in an object, allowing it to be tracked more precisely. More importantly, application state is a better way of dealing with large applications as it has a more centralized state overall.

Component state is the more traditional React state model wherein the data is local to the component itself, thus it is not immediately accessable to other parts of the application unless it's passed around by props.

Component state is wise for smaller applications with less state to manage. Application state is better for more bigger projects: simplified access to data from a buried child component- applications with lots of moving parts. It's also useful for data that is going to persist for a longer duration of time. Component state is sometimes better for more temporary state, state that will be changing more frequently and more directly effects a component. A list of todo's in a todo list component might make more sense in component state, whereas a user's preferences for the notifications they want to dismiss would suit application state more, as it persists much longer in the application. Component state can be very difficult if it needs to be passed thru many other children components with props (drilling) and so sometimes data that has to jump thru many hoops might be better accessed in the store, or application state.

4. What is middleware?
   MIDDLEWARE is what sits in between ACTIONS and REDUCERS to add functionality to our Redux flow. One main reason we use middleware is to handle asynchronous operations in a synchronous Redux flow. We specify what middleware we're using when setting up createStore.

5) Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
   Thunk is a middleware that give us the ability to work asynchronously. The action creators we write can now return functions to alter the DISPATCH method in the STORE. This allows us to handle the code in our dispatch when we need it to, often times later on. One use that comes to mind is using Axios to fetch data from an API on a server.

6) Which react-redux method links up our components with our redux store?
   The CONNECT method.
