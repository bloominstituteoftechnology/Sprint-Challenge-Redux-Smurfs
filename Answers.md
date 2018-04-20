# 1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

## `map`, `filter`, and `reduce` are methods that allow us to work without side-effects, side-effects being the existence of a variable that is unnecessary in a function. The method we use to create a new object while extending the properties of another object is `.create`.

# 2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

## `actions` are payloads of information that send data from your application to your store. They are the only source of info for the store and they're sent using `.dispatch`.

## `reducers` specify how the applications state changes in response to actions sent to the store.

## `store` the store is the warehouse that brings together both the action and the reducers. It also holds the app state, allows access to state via `getState()`, allows the state to be updated, and handles listeners via a `subscribe()` function.


# 3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

## The application state is global, the component state is local. The app state using a library like Redux is good for large-scale apps that have tons of data. With properties like `store` we can have all the components hook into store and interact with data through `store`. The component state is when components exist unto themselves, so to speak, in that they can only be updated through their local files because they don't reach beyond that.

# 4.  What is middleware?

## Middleware is essentially a bridge between the app and a database. One way we'd use this is when we want users on a webpage to submit data and interact with the webserver through forms.

# 5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

## 

# 6.  Which `react-redux` method links up our `components` with our `redux store`?


# 7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second `getSmurfs` request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?