1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

2. .slice(), Object.assign, and return {...state,} don't create side effects.
2. actions return {type:'CASE'}, reducers switch(action.type) case 'CASE': {logic}, the logic affects the redux state, 
which is used in the main app as props, along with the actions imported to be triggered, usually on on-click events
2. Both states have their uses. The main difference would be app state has to be held in the app, component state is help in provider,
 above the app, then passed into the app. This would be useful if say, you had 5 different pages, and if userLoggedIn=true, you want
 to display the pages. In app state, you would have 5 seprate values that would have a hard time communicating, in component state,
 userLoggedIn=true would be passed into all 5 pages the same.
2. middleware basically re-formats data into a way it's more usable or unifrom for your reducers to use it.
2.I'm not sure exactly what thunk does, but I know it's required for the axios stuff we're doing.
2. { connect }