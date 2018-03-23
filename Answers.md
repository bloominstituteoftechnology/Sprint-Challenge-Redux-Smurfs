1. Three pure javascript methods that we use would be .map, Object.assign, and .filter. The method we seem to use most commonly is simply returning a new array using spread notation to include new data.

2. Actions: these boys are called inside your components and are the ones that send data to the state (through reducers?). They are typically found in action creators which are functions that send the type of action and the data. 

    Reducers: Reducers are the parts that take the information given by the actions and change the store. They never alter the store, they just update it with new or replaced information.

    Store: Store is the way redux handles application-wide state. It has several methods that allow you to access and update it. It is known as the "single source of truth" as you may only have one store.

3. Application state is basically what redux calls its store. It's available to every component that you connect to redux, you do not have to pass it down via props. Component state is only available for that component and must be passed as props to children components. 

4. Middlewares are programs that are run at the point between actions and reducers. 

5. Redux-thunk makes asynchronous actions nicer in redux. It allows us to make actions that return functions instead of just actions. This allows us to make actions that wait for certain conditions, for example.

6.  connecct()