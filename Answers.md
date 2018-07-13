1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? <br>
    I. `.slice()` <br>
    II. `.forEach()` <br>
    III. `.map()` <br> <br>
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? <br>
    `store` is where application state is held in redux, known as single source of truth because it holds all of our initial and current state for the application. `actions` respond to user input and dispatch an action block which the `reducer` then takes and decides what to do with `state` based on the `action`. <br> <br>
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other? <br>
    Application state is the overall state of the application and can be accessed by any component through Redux. Component State is when a component manages its own state, such as a form that needs to manage state for its input fields. <br> <br>
1.  What is middleware? <br>
    Middleware, using Redux as an example, is something that we pass between our actions and reducers. It does something (like log to the console) each time an action is dispatched. <br> <br>
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? <br>
    `redux-thunk` allows us to use functions inside of our action block, a way to handle asynch AJAX calls in out actions <br> <br>
1.  Which `react-redux` method links up our `components` with our `redux store`? <br>
    `connect()`
