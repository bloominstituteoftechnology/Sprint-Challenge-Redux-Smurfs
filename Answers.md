## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

* Array.concat()
* Array.map()
* Object.assign()
* All 3 methods prevent the mutation of the original array or object. This prevents side-effects such as losing your redux store history.

1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

* actions - are packets(objects) of information that are analyzed by reducers.
* reducers - analyze actions in order to properly handle the information the action has in it. Handling it means altering a copy of your redux store and setting that as the new state or not based on the action recieved.
* store - the store is where all of your apps data lives, that is any information that is pertinant to the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

* App state is your redux store your master warehouse where important information is stored. Data that may need to be used in more than 1 component. Using your store to store something that may be required throught your app. Such as a users name, or login info.
* Component state - is state that only a specific component needs to know. A good example of this type of state is a state to manage text input in a form. (like adding a new friend) Only when the new friend info is complete do we want to store it in the store.

1. What is middleware? - allows a a 3rd party extension point to better manage your redux flow. Allowing you log actions and reducers as they work.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

* redux-thunk allows redux to see what is happening at each step of our axios requests. (such as logging actions dispatched)
* changes our actions-creators because we can merge our http requests into actions and involved our redux in our informational(axios) exhange flow.

1. Which `react-redux` method links up our `components` with our `redux store`?

* connect - grants access to actions and storage related to your redux structure.
