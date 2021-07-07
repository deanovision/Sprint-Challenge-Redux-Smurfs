import React from "react";

class AddSmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  onChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            name="name"
            placeholder="name"
            value={this.state.smurf.name}
          />
          <input
            onChange={this.onChange}
            type="text"
            name="age"
            placeholder="age"
            value={this.state.smurf.age}
          />
          <input
            onChange={this.onChange}
            type="text"
            name="height"
            placeholder="height"
            value={this.state.smurf.height}
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}
export default AddSmurf;
