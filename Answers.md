1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

3 JS methods that do not produce side-effects include: Array.filter(), Array.map(), Array.concat(). Object.assign() is used to create a new object while extending the properties of another object.

2.  Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are JS objects that contain a type and payload(data). They are created by functions called action creators which usually represent a user interaction or event in a web app.

Reducers are JS pure functions that take in state and an action as arguments. They are responsible for altering pieces of state with the data from actioins. Reducers represent different pieces of an app's state and are completely independent of each other.

The store is a JS object that represents the state of a web app. It's only responsibility is to hold data for the application and it's known as a 'single source of truth' because store is immutable and redux allows devs to inject specific data into components. Redux copies new versions of store to allow for time travel debugging and more efficient ways to debug an app.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and immutable. It is responsible for holding major pieces of data that can be injected into other components. Component state is data that is stored within a component and is mutable. It's better to use component state for trivial data that does not have global impact on the app such as toggling or handling new input. Application state should be used for data that is affects more than one component and is global.

4.  What is middleware?

Middleware is 3rd party code that extends the functionality of Redux and gives developers better tools to work with Redux. It is usually in a package form and interacts with actions before they reach a reducer.

5.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Thunk is middleware that allows devs to write asynchronous operations such as HTTP requests with dispatch() which is a native Redux function. Data from these requests can then be used to update store with reducers. Thunk changes our action-creators to become asynchronous functions that can interact with servers.

6.  Which react-redux method links up our components with our redux store?

Connect() links up our components with store.
