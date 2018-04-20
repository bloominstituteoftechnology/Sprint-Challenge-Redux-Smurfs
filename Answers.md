# Answers

1. We use concat to add to an existing array, we use map to show the array, and we use Object.assign. Object.assign returns a copy of the existing array and extends the properties of another object. 

2. Actions are the information we pass to the other places with dispatch. Reducers show how the information from actions affect the rest of the app kind of like a function its where we concat and object.assign. Store is effectively a storefront its where all the information is brought together for consumption. The store is the single source of truth because it is a controllable construct that isn't ever changing like data.

3.Application state is global and is understood by all the components. Component state is local and can only be understood when it is passed down through props. Component state is good for organization and can be fiddled with more freely as it only affects the things in its tree. Application state should be less mutable as it affects everything but in the same way it is a very powerful tool useful for broad tasks. 

4. Middleware is an extension point that takes place between action and reducers. It can be used to add functionality to redux/

5. Its middleware that allows for asynchronous redux. It effectively gives us access to the dispatch() method in our action creators.

6. connect gives the ability to link our different components to one another.