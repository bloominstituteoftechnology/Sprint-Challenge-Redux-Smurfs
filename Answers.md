1. 
Object.assign(), array1.concat(array2), [...state, payload]
Object.assign is used to create new object while extending properties of another object.

2. 
Actions: These are payloads of information that send data from your application to your store. ("state" fro redux)

Reducers: Reducers decide how to respond to the payloads sent to the store by actions.

Store: Store holds application state, access state via getState(), update state via dispatch(action), create listeners via subscribe(listener), and unregister listeners through the function returned by subscribe(listener).

3. 
Component (or react) state is stored locally within a component and its information is passed down to different components through props.

Application state (redux store) allows access to the store information by having a specific component of interest subscribe to the store, meaning the application state is stored globally. 

For Trivial edits like user in put fields, toggle witches, true/false information, use `this.state`

For all other data use `redux store`

4. 
Middleware is a third-party extension point that exists between disptaching an action and the moment it reaches the reducer, giving us the option to perform asyncronous actions. 

5.
redux-thunk is a middleware that allows you to write action creators that retun a fucnction instead of an action. It can be used to delay the dispatch of an action, or proceed dispatching only after certain condition is met.

6. --
