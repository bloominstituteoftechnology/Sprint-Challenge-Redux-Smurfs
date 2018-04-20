Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

answer: 

 - map
 - reduce
 - filter

 - the method in question is the class - extends method. 


Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions are payloads of info used to send data from an app to the store.
- reducers are written to decide how the app will alter after actions are sent into the store
store- the over-arching app-wide state or data storage for an application. 


What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is available to the entirety of the apploication. Component state is only available to that specified component. 


What is middleware?
software that allows communication and management between an operating system and the application running on it. 


Describe redux-thunk, what does it allow us to do?
How does it change our action-creators?

redux thunk is a piece of middleware, it allows our application to do async processes.
it dispatches actions to reducers.  



Which react-redux method links up our components with our redux store?

connect. this links components with the apps store. 


(Stretch goal question for if you get the DELETE endpoint working) The server's DELETE endpoint functionality is not optimal, since it requires you to either make a second getSmurfs request to fetch the updated list of Smurfs after deletion, or you need to keep two sources of truth synchronized, one in the client and one in the server. What change would you propose to make the server DELETE functionality more optimal such that either of these two issues are not encountered?