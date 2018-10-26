1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
4. What is middleware?
5. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
6. Which `react-redux` method links up our `components` with our `redux store`?


#Question 1

Three JavaScript methods that do not mutate the original array or produce side effects include the `.map()` method, the `.concat()` method and the `.filter()` method.  The first method, `.map()` iterates over an array and performs the callback function to each item producing a new array of items and does not mutate the original.  `.concat()` can be used to combine arrays in a multitude of different ways and can be used to make 'shallow clones' and relates to some of the ways the spread operator can work on arrays.  Finally, `filter()` is used to created arrays that have certain items filtered out according to a callback function it is provided.  This produced a new filtered array, and does not mutate the original.  These immutable methods are advantageous for programs that have a goal of establishing some type of stored state of information, since manipulating the starting state is needed but also a record of the starting state is also needed and these methods allow for both of those processes to occur at the same time. 
