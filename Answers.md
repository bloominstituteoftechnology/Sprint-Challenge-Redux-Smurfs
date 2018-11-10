1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    * The first one is very simple we can create another variable and initialize it with that previous object like this:

    ```
    const oldObject = {
        name: 'Luis',
        age: 24
    };

    const newObject = oldObject;
    ```

    * The second one and my favorite is using the spread operator like so

    ```
    const oldObject = {
        name: 'Luis',
        age: 24
    };

    const newObject = {...oldObject};
    ```

    * The third one is using Object.assign that is not my favorite but still is an option

    ```
    const oldObject = {
        name: 'Luis',
        age: 24
    };

    const newObject = Object.assign({}, oldObject);
    ```


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    * Redux is really useful because you can set a global state that you can access on any component no matter how deep nested it is hence why it's called 'single source of truth'. This is an amazing thing to have when you have big applications that require probably the same state on multiple components. It does have a downside that it needs a lot of boilerplate for it to run correctly and for small applications is not neccesarily useful to have Redux. Actions are functions that execute some code that we set up. We can make this actions to be executed whenever we want on any component. We passed the name of the actions to the reducer that will be in charge of passing them to the store. The reducer will be in charge of checking which action has fired and depending on which will update the state. All of this is passed to the store that for me is the core of redux where it holds all the reducers and actions and then can be used on the components.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    * Application state is the state we set with Redux that can be used by any of the components. This is very useful with big applications that we may be passing the same state value to multiple components that can be very nested making it clunky if we use React state on a class component.

    * Component state is the state that React let's us use on a class component. This is generally used for states that don't need to be nested too deep like passing an array of objects to another component or holding user input. This is preferred to be used when there is not a lot of nesting going on in your components making it easy to figure out.

1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?
