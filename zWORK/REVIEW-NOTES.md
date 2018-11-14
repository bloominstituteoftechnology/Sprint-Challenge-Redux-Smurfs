Changes
# App.js
  Left out mapStateToProps  block
    const mapStateToProps = (state) => {
      return {
        smurfs: state.smurfs,
        error: state.error,
        fetching: state.fetchingSmurfs
      }
    }
  
  Left out mapStateToProps export
  export default connect(
    mapStateToProps,
    {
      loadSmurfs // action
    }
  ) (App);

# Smurf.js
  // you want to pass props and you had named it smurfs


# SmurfsList.js
  // SmurfsList was over-complicated.