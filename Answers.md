1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    - .map()  Array Method
    - .filter() Array Method
    - (...) spread operator

    When creating a new object while extending the properties of another object, we typically use the spread operator because its nice & clean, easy to read, and way less code to write.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    `actions` are objects that typically hold 1 or 2 key/value pairs. It needs the `type` key & value no matter what, but a payload key may also be present. The `action` is passed into the `reducer` in order to make something happen to the `state` stored in the `store`. In the `reducer`, the `action` object is passed into a switch statement where the the `action.type` is matched to a case. From here the reducer `returns` whatever the matching case defines in it's body. This is typically where the `action.payload` is used if one is passed. The payloads data is then used to update the state. The `store` holds the state and passes that information to the app when it is properly provided. The `store` is a single source of truth because there is only one in a Redux App. Even if there are multiple reducers or initial states, these all combine into one reducer to be handled by the store and the states are combined into one state in the store. Because we as developers can not write code that mutates the state directly, we send what we done into redux and it will update the one and only store for the app based on what we ask it to do. It will then pass the new information down to the components in the app.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    
    Application state is a global state that can be accessed by any component in the entire app. It dictates the data that is passed down to the child components. Component state is state that is only accessed within that component. The only time I can think to use component state safely is when there is a form in use. The form component needs it's own state to hold input text and pass it up to the application.

1.  What is middleware?

    Software that provides additional services to an app besides those available by default. It is described as glue that brings together the front-end network requests with data from the back-end. I would describe as translator or mediaum between the front-end requests & data retrieval from the server in a way because for Redux, we have used middleware to help with processes that can't be communicated directly from the front-end to the server. Like thunk allows us to create higher order functions that return functions in our actions to make API requests. Without thunk, we would not be able to make this request properly in redux because actions are supposed to only return objects.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Oops, see the answer above. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

    The connect method that we import from react-redux connects our components with the redux store. But only after we wrap the app in a Provider tag and pass the store as a prop.
