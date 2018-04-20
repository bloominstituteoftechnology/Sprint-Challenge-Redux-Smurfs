import React from 'react';
import PropTypes from 'prop-types';
import {Smurf} from './Smurf';
​
const SmurfsList = ({ smurf, onClick }) => (
  <ul>
    {smurf.map((Smurf, index) => (
      <Smurf key={index} {...smurf} onClick={() => onClick(index)} />
    ))}
  </ul>
)
​
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired
}



const mapStateToProps = state => {
    return {
      smurf: SmurfsList(state.smurf)
    }
  }
  ​
  const VisibleTodoList = connect(mapStateToProps)(SmurfsList)
​
export default SmurfsList