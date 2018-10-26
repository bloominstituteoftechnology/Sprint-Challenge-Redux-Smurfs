1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
4. What is middleware?
5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
6. Which `react-redux` method links up our `components` with our `redux store`?


#Question 1

Three JavaScript methods that do not mutate the original array or produce side effects include the `.map()` method, the `.concat()` method and the `.filter()` method.  The first method, `.map()` iterates over an array and performs the callback function to each item producing a new array of items and does not mutate the original.  `.concat()` can be used to combine arrays in a multitude of different ways and can be used to make 'shallow clones' and relates to some of the ways the spread operator can work on arrays.  Finally, `filter()` is used to created arrays that have certain items filtered out according to a callback function it is provided.  This produced a new filtered array, and does not mutate the original.  These immutable methods are advantageous for programs that have a goal of establishing some type of stored state of information, since manipulating the starting state is needed but also a record of the starting state is also needed and these methods allow for both of those processes to occur at the same time. 

#Question 2

In Redux, three major terms come into play when one discusses how state is managed.  These three terms are actions, reducers and the store.  The store, essentially does what is seems to imply and is a storage place for data in the application.  I like to think of this in a sense of a super state, or similar to what a component state does, but at much larger application wide level.  However, component state and redux state storage have several differences and different methods and caveats that come with each of them, especially in the way they are accessed and moved around - but one important similarity is it is expected that state has this immutability to it and acting on it directly is a no-no.  Therefore, in redux you have actions and reducers to serve as a bridge between the application and the data it contains.  Actions essentially dispatch objects with different tasks or conditions to reducers that essentially receive each condition and perform the action and communicate that through connections made with the state storage or by passing such state data through the applications props.  In a sense, since data is accessed and worked on in proxy and is the only source of data in a Redux process, then it is considered a single source of truth (data generally is mostly all truthy values of computational interest) versus the component-based sources of truth seen in React's general approach to state management and propogation. 

#Question 3

Sort of touched upon in the previous response, its the scope and reach of each state that really differentitates Application versus Component state.  In stark contrast, the Application state is an application-wide data store that has methods and processes for working and passing data across the entire application with the help of various methods, actions, and reducers.  Component-based state is a hallmark of React and handles the storage of data on the component and uses different methods and object properties (props) to pass data between components in a "data flows down" approach versus the more application wide approach of Redux and the state store.  They both have their pros and cons and actually work wonderfully in tandem.   Application wide approaches start to loan themselves very nicely to large scale applications and scale very nicely, whereas small applications tend to not need the application based approach - also, things such as form data which really have no need to be accessed on an application wide data actually do best stored in a component based approach and, I'd imagine, actually is better at maintaining the collected form data and its integrity. 

#Question 4

Middleware adds new functionality to Redux and intercepts every action before it flows through the Reducers.  It can do things such as stop actions, log actions and states, dispatch different actions, and dispatch multiple actions and help with asynchronous work.

#Question 5

Redux-Thunk is essentially middleware that allows asynchronous calls to tie into Redux actions and allows for the dispatching of CRUD based HTTP requests, `.then()` and `.catch()` methods and allows efficient work flow with APIs and their data within React-Redux.


#Question 6

React-Redux has a module called { connect } that you can use to link and export a
"dumb component" and create a "smart component" that now is in communication with the Redux data store.  It actually is quite a interesting approach and gives the developer a lot of ways to handle how data lives in and moves around a given program.  With React, Redux, and middleware you can store data application wide or in a more compartmentalized manner on components and then have the ability to move that data within components never even touching the store, or if one chooses you also have the ability to do the opposite and have methods for allowing communication between any localized component state and the larger application based state store if needed. One of those methods, that also should be mentioned at this point is the mapStateToProps method which also allows state data to then be passed between components as props.  So generally, a flow of data in a Redux loop moves from the component to the action creators which produce an action that gets dispatched to the reducers which then update state, which then if needed can be passed to props back to the component which then can be passed in the "data flows down" manner to other components if need be.