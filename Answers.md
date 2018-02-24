1. **Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?**

* Three Methods Which Do Not Produce Side-Effects:

* * `Array.prototype.slice()`

* * `Array.prototype.map()`

* * `Array.prototype.filter()`

* Method Used To Create New Object:

* * `Object.create()`

---

2. **Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?**

* **Actions:** Data sent from your application to the store.

* **Reducers:** Governs application state changes in response to actions.

* **Store:** Only one store exists in a Redux application, this is where the state of the app is stored and accessed through `getState()` or updated through `dispatch(action)`. As all actions and reducers must make use of the store for application state information, it makes it the 'single source of truth.'

---

3. **What is the difference between Application state and Component state? When would be a good time to use one over the other?**

* As the names suggest, the difference is the state of the entire application as a whole (e.g. Redux store), versus the locally-stored state of individual components within that application (e.g. React state). 
* * As an example, updating text in an input field would make use of component state, whereas the actual submitted data from several inputs in a form may be better suited for application storage, depending on what the application does with this data.

---

4. **What is middleware?**

* Code which exists between Redux dispatching an action and the time the action reaches the reducer. This means useful additional functionality, such as logging, asynchronous API actions, routing, and so on can be introduced into a Redux application.

---

5. **Describe redux-thunk, what does it allow us to do? How does it change our action-creators?**

* Redux Thunk is a middleware which provides `dispatch` as the first argument to functions, and allows Redux to recognize async action creators as a special case of normal action creators, instead of as completely different functions.

---

6. **Which react-redux method links up our components with our redux store?**

* `connect()` which is often used in conjuction with `mapStateToProps()`.
* * For example, `export default connect(mapStateToProps)(Component)`
---
