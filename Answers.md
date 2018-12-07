1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

The three javascript methods are .map, .filter and .concat. when these three are used n the correct mannor; We can create new arrays based on current data without modifying  nor altering the corrent data, array or object. this has man benifits to coding styles that need to inpliment immutability.


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions reducers and the store are the essential elements of redux that allow itto offer value to the software workflow. the redux value is managing an apps state data, interfacing vith any level of the application dirrectly if desired andsyncing hts state data ofavy and every part of the app.
An action is something that is returned from an action creator. it is either an object, or can be a fuction for axios calls. it goes to  reducerbefor ultimatly updating the redux state sore. A reducer is the part of redux that accepts an acton . It is the part of redux where all of the logic is stored to respond to all the action. reducers also update the state.THe store is the single sourse of truth because it saves all of the stateful data in it, accepts all the data in the app and passes  that data on when requested.


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the central state in an app and is the role of the redux store. 
component data is the data that is locally created and or sored in a stateful component. If that data will only be used locally and will have no further value it is better to use local component state. if that data will be relevent on the application level or in other components especially parent level components, it is benificial to use the application level state, or redux store state.

4.  What is middleware?

Middleware is a extention in the redux, used to make it more functional. there are middle ware in many other libraries and frameworks as well. Essentiall the midle ware stand between the ations and the reducers like a gatekeeper, and inspects all the action that get passed. if an action is an object it lets it go by. if an action is a function the middle warewill run the function. Middle wares can stop ation, dispatch one or more actions at a time and foward action.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a type of midleware. it specializes in impimenting  asynchronous callbacks and operations in actions/actioncreators. this is mostly for use with dispatch to interact with server/web/api/ calls and communications.

6.  Which `react-redux` method links up our `components` with our `redux store`?

The Provider method links our component with our redux store, the same is true for context as well.
