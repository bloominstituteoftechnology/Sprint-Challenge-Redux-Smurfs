1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
4. What is middleware?
5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
6. Which `react-redux` method links up our `components` with our `redux store`?


#Question 1

Three JavaScript methods that do not mutate the original array or produce side effects include the `.map()` method, the `.concat()` method and the `.filter()` method.  The first method, `.map()` iterates over an array and performs the callback function to each item producing a new array of items and does not mutate the original.  `.concat()` can be used to combine arrays in a multitude of different ways and can be used to make 'shallow clones' and relates to some of the ways the spread operator can work on arrays.  Finally, `filter()` is used to created arrays that have certain items filtered out according to a callback function it is provided.  This produced a new filtered array, and does not mutate the original.  These immutable methods are advantageous for programs that have a goal of establishing some type of stored state of information, since manipulating the starting state is needed but also a record of the starting state is also needed and these methods allow for both of those processes to occur at the same time. 

#Question 2

Sort of touched upon in the previous response, its the scope and reach of each state that really differentitates Application versus Component state.  In stark contrast, the Application state is an application-wide data store that has methods and processes for working and passing data across the entire application with the help of various methods, actions, and reducers.  Component-based state is a hallmark of React and handles the storage of data on the component and uses different methods and object properties (props) to pass data between components in a "data flows down" approach versus the more application wide approach of Redux and the state store.  They both have their pros and cons and actually work wonderfully in tandem.   Application wide approaches start to loan themselves very nicely to large scale applications and scale very nicely, whereas small applications tend to not need the application based approach - also, things such as form data which really have no need to be accessed on an application wide data actually do best stored in a component based approach and, I'd imagine, actually is better at maintaining the collected form data and its integrity. 
