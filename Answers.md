Array.prototype.filter()

Object.entries()

Array.prototype.map()

Object.assign()

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch()

Reducers specify how the application's state changes in response to actions sent to the store. That actions only describe the fact that something happened, but don't describe how the application's state changes

The Store is the object that brings the actions & reducers together.

The reason it is referred to as the single source of truth is that all data fundamentally flows to this central repository. Components may hold their own state independently, which can be useful, but ultimately anything of value to the whole application will find its way through the reducers and back to the store.

Application state is accessible by any part of the application, assuming it is appropriately connected to the store. Component state is private to that component. You should use the store when you think the data will be used by multiple components, otherwise, you should use Component state. This will keep things nicely isolated to where they are necessary, and prevent you from polluting the store.

As stated above, it is a layer of software which sits between the reducers and state that can provide additional functionality to your application.

Thunk is middleware that allows your action creators to return a function. This allows you to delay a dispatch that would normally happen immediately, by waiting for a condition, or even discarding it entirely. This makes it ideal for dispatching the results of a promise.

The connect() method.