Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Object.assign() - This is the method to create a new object while extending the properties of another. It takes as parameters: an empty object, an object to copy, and any overwriting properties
    Array.filter() - returns a new array which meets requirements specified
    Array.map() - returns a new array where each item may be specialized if desired

Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions - are objects that signal something has happenned.
    Reducers - are functions that take state and an action as arguments and return the next state. The specific action type determines what the shape of the next state will look like.
    Store - holds the application data in one centralized location so it is easy for any component to receive the data it requires.

What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state - this is like the whole brain of the application. All the main data is stored here.
    Component state - extending the brain analogy, component state could be any section of the brain like the Occipital Lobe. A component may have particular state that the application state doesn't care about, or it may have local state the application state does care about but only when the component is ready to fork it over. You wouldn't send a smores kit to a friend without marshmallows. A component won't send a state 'package' to the application state until it's ready, which means it needs a localized state to store its data until it is ready to ship that whole data package out. 

What is middleware?
    A software that allows an OS or database to communicate with an application. It can make logging and testing easier on the programmer since they can see the what is happening between the two.

Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    It's a middleware that allows an action creator to return a function. It lets us make asynchronous calls and dispatch actions.

Which `react-redux` method links up our `components` with our `redux store`?

    connect()