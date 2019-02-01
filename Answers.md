**Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?**

`.map` `.filter` and `.reduce` do not change the array/object in place and instead create 'clones' of the array/object they are modifying.

We can use the `Object.assign()` method to create a new object and extend the old properties onto it.


**Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?**

Actions give us a central location do determine information that will be sent to our state store.

Reducers run comparisons between the old state and the new state and update the application based on their differences. Reducers take in actions from the actions domain, and use them in their comparisons.

Store holds all the information regarding our application's state. Redux uses a singular store so that there is only one valid version of application state at any given time. This reduces state conflicts and makes state easier to manage in large applications.

**What is the difference between Application state and Component state? When would be a good time to use one over the other?**

Application state monitors the state of an entire application as it runs. 

Component state is only concerned with a singular component's state and the state of its child components.

Application state is better leveraged on large scale applications with many moving parts.

Component state is more suitable for small or personal projects, or projects that do not yet require application state before they scale (e.g. development vs production)

**What is middleware?**

Middleware is any application that serves as a mediator between the application and the server. In our instance, using Axios for CRUD requests is the middleware between the application and the server or API. 


**Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?**

Redux thunk permits us to use asynchronous calls to the server. This allows for greater flexibility in logic when passing information to and from a server/application, as the calls can be held pending a successful data return.

 **Which `react-redux` method links up our `components` with our `redux store`?**

Using the `connect` function allows us to link up components with our redux store. By wrapping the App with Provider, we can pass our store down the component tree, and access it using the connect function to link components with actions that filter through reducers to update our state store.

