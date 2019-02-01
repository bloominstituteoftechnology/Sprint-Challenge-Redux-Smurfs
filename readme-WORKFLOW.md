* [x] write down the flow you want to follow
      1. Create components
          SmurfForm.js
          SmurfsList.js
          CreateSmurfForm.js
          UpdateSmurfForm.js
          Smurf.js
          SelectedSmurf.js
      2. Create action creators
          smurfsActions.js
      3. Create reducers
          smurfsReducers.js
      4. Create root reducer
          ??
      5. Create Redux store
      6. Make import statements
      7. Make connections

* WORKFLOW 
      1. [x] Create components and related folders
          src/
            - App.js
            components/
              - FriendsList.js
              - FriendForm.js
              - CreateFriendForm.js
              - UpdateFriendForm.js
              - SelectedFriend.js
      1b. []  Refactor App.js
              modify root <div>
      2. [] Create action creators
            actions/
              index.js

      3. [] Create reducers
            reducers/
              - friendsReducer.js
              - index.js
              - singleFriendReducer.js
         [] Create root reducer (see tip below) in index.js

      4. [] Create Redux store in App.js
    
      5. [] Use the Provider component from `react-redux` to pass the store to your root component.

      6. []  `connect` the React components that need access to the store.

      7. [] hook up the store using the `Provider` tag inside of `src/index.js`, passing it your root reducer.

      8. [] Use `redux-thunk` as a middleware inside of `src/index.js`. Be sure to pass it to `applyMiddleware()` then feed it into your createStore function.

      9. [] (Optional) include `redux-logger` to your middleware. You're going to have plenty of action creators that will consume our API so you'll get plenty of actions triggered.

* [] write down each individual piece you need for each step in the flow: