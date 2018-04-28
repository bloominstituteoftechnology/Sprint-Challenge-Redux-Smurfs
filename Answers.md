#### 1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- .map(), .filter(), .concat()

#### 2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- The Store is the global state of the application, while the reducer is what sends new pieces of state to the store to hold, while the action specifies what state the reducer is to affect.

#### 3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is just as the name suggests application wide state able to be accessed from anywhere. Where as component state is local only to that component. It's a good time to use application state over componenet state if you find yourself passing down state and callbacks down to many children components.

#### 4. What is middleware?

- Code or software that acts as a middle layer or communication layer between two applications.


#### 5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

- redux-thunk is middleware that allows us to use our action creators asynchronously.

#### 6. Which react-redux method links up our components with our redux store?

- `connect()()` allows us to connect our components up to redux store.

#### 7. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?

- Instead of having the server send back only the smurf that was removed. Have the server send back the entire smurf list with the deleted smurf filtered out.
