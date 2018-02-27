1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
```
  Array.prototype.concat(), Array.prototype.map(), and Array.prototype.filter(); Object.assign({}, obj, {newprop1: blah, newprop2: blah2..})
```
1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
```
  Actions deliver all necessary information to reducers, as well as tell the reducer which case it should evaluate. Reducers make changes to the store (by replacing instead of changing), based upon info provided from the relevant action. The store is generally an object of key:value pairs that is made availabe to all components through Redux. When implemented properly, the store is the single source of truth because it is the only way to access the App's state while also being the quickest/easiest way to share info across components.
```
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
```
  The difference is similar to the difference between global and local. Application state is used for sharing information across multiple components; if it is needed by many component throughout the app, it should be in App state (redux store). Component state is used for updating local information. A common example of component state is handling the value change of a form's input.
```
1. What is middleware?
```
  For redux, middleware is the third-party extension that takes place between dispatching an action and receiving info in the reducer. The main uses we've focused on have been for logging store changes and adding asyc to react-redux applications.
```
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
```
  Redux-thunk is middleware that converts redux's action-reducer format to be compatible with async actions. The output of the action-creator is based on the result of the async action.
```
1. Which `react-redux` method links up our `components` with our `redux store`?
```
 connect(), often in combination with mapStateToProps();
```