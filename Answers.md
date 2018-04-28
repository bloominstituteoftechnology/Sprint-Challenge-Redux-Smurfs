#Answers

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

* Functions that do not produce side-effects are called pure functions. These are functions like Map, most, if not all the Math functions, and hmmm... I don't know of a 3rd that I could remember right now.

2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

* Store is what harbors or stores/ links to the reducer, it is what controlls all the components, you're component will not do much and most, if not all actions will not work without the "truth"/ cases of the reducer.
* Your action is what communicates to the reducer to see if what it is trying to do can be allowed. If I am trying to store an ```action.payload``` in my state, but my reducer doesn't recognize anything called ```payload``` it will stop your action and error out. It keeps all your components honest.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
* Application state is a global state that any component in the redux act can connect to to have access to it.
* Component state is a local state that can only be changed in the specific component it was created, and can only be passed down to it's children via props.
* I think that if data needs to be changed, or can change rapidly, then you want the state in the component level, and vice versa, if you need something stores for a long period without any change, store it at an application level.

4. What is middleware?
* It takes multiple components that have no idea each exist, and bridge them together so they then realize they all exist. Then they can communicate with each other and send information accross a bridge that normally would not exist.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
* redux-thunk intercepts an action, and sends it back as a dispatch when you really want to dispatch that action. It let's you control when exactly you want to call an action. I.E only dispatch when a certain condition is met.

6. Which react-redux method links up our components with our redux store?
* That would be our connect, wouldn't it?

7. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?

* I see that in our ```server.js``` file we are finding the id of the object we want to delete first. Then we filter that out. Why? Why couldn't we just filter the id of the object upon initial request of delete so that when a ```SUCCESS ``` action occurs, it could automatically update to the recent state?