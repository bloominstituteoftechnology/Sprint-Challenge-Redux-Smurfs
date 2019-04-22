1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Side effects meaning that it does not alter the original array/object, array.map, array.filter, and Object.create.

    array.map is similar to forEach but returns a new array without altering the original. map performs an action on each array item and returns the new array with the actions peformed.

    array.filter is similar to array.map but you insert a condition to filter out things in the array, it returns an array without altering the original.

    Object.create is a method that is used to create a new object while having the properties of the object that it created a new instance of, Object.create also does not produce side effects.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is a global state, it holds information that is use in the application globally.
    
    Actions are functions that are performed when the user interacts with what they can see in the application. When they interact with a part of the application, an action is triggered, which is passed on to the reducer.

    The reducer's job is to take an action and take the previous state, and update the state to reflect the end result of the action performed, which in turn updates what the user interacts with in the view.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

        Application state is a state that is global and can be used by any of the components in the app. Component state is local to only the component which has it and can be passed down to the children of that component. Application state is useful when there are bits of information which are needed and used throughout the whole site, such as the information of the user who is logged in. Component state is useful for when the component needs specific information but it would not be useful or even potentially damaging to other users to use that state information globally. For instance, when a comment is being typed out the state is updated in the component that carries the comment text box. If this information were held globally, then all comment text boxes across the application would update when only the one that the user is currently using needs to be updated.

4.  What is middleware?

    Middleware are third party services that in redux act between the action and the dispatcher to perform various tasks, such as logging, crash reporting, routing, and handling asynchronous requests.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    When an action returns a function instead of an object, reduxt thunk will execute the function.

6.  Which `react-redux` method links up our `components` with our `redux store`?

    Connect

    import {connect} from 'react-redux'

    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )()

