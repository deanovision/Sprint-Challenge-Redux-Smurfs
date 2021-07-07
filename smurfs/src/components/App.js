import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf, getSmurfs, deleteSmurf, updateSmurf } from "../actions";
import SmurfList from "../components/SmurfList";
import "./App.css";
import AddSmurf from "./AddSmurf";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <AddSmurf addSmurf={this.props.addSmurf} />
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList
          updateSmurf={this.props.updateSmurf}
          deleteSmurf={this.props.deleteSmurf}
          smurfs={this.props.smurfs}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error
});
export default connect(
  mapStateToProps,
  { addSmurf, getSmurfs, deleteSmurf, updateSmurf }
)(App);
