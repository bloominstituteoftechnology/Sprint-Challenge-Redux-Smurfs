1.

Array.reduce, Array.concat, Array.map. Object.assign creates a new object by extending properties of another object.

2.

Store is a state, it is where everything is stored and managed from. It holds all reducers and updates itself by dispatching actions to reducers. In redux we can have only one store (in Flux we can have multiple stores). Actions, as name suggests, are actions that user can do by interacting with websites, they are sent to Reducers via Action Creators and based on their TYPE and PAYLOAD they can affect data in app. Reducers are between Store and Actions and their job is to handle or the data manipulation.

Biggest goal of all these 3 pieces is to grab all incoming values, turn them into one value and pass to Store, then Store will send an update to Components that need it. 

Single Source of Truth means that all data is stored in one place in Store and it can only change one way - via Actions and Reducers.

3.

Application state refers to the global state of application that is held in the Store. Component state is just a local state entrusted to that particular component. Application state should be used with larger data, especially if it needs to be passed to other Components. Component state should be used for managing inputs in forms, toggling etc.

4.

Middlware is between Actions and Reducers. It can 'hijack' an action and do some changes to it before it arrives to Reducer. There are plenty of middleWares with many possibilities (logger, redux-saga etc.) and their main job is to extend features and possibilities of Redux.

5.

It allows us to use asynchronous Javascript, because thanks to middleWare we can return functions from Action Creators instead of just simple plain objects.

6.

Connect

7.

I recognize the problem but i have trouble coming up with a solution, maybe instead of fetching new GET request, we can based on the status code (if deletion was successful) just filter out removed smurf from local state and return it that way.
