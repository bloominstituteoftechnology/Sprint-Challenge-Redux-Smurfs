1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
   Object.assign
   Array.map
   Spread operator
2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
4. What is middleware?
5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
6. Which react-redux method links up our components with our redux store?
7. (Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second      getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What       change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?