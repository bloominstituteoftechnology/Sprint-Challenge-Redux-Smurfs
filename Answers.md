1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    concat(), filter() and map(). Assign().

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions say something happened, they describe the type of state change performed but don't say how the state changed. The reducers have the logic for how the state changes. The store has the state tree of the app. It is an object that has its own methods.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    The application state is global, and the component state is local. When you want all components to have access to a certain state then application is best but if you only want one component to have access to a certain state then component state is the one.

4. What is middleware?

    It is a type of framework that helps programs send data but that data must first pass through the middleware. Depending what you set your middleware to do, it executes your rules before it sends the data to its destination.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    It is a middleware that allows you to write action creators that return a function instead of an action. It creates its own action by using the dispatch method that redux-thunk gives us to use.

6. Which react-redux method links up our components with our redux store?

    Connect()

7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?