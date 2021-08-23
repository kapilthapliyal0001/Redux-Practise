import React, {Component} from "react";
import {Row, Container} from "react-bootstrap";
import {connect} from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addTask: (someText) =>
    dispatch({
      type: "ADD_TASK",
      payload: someText,
    }),
});

class AddTask extends Component {
  state = {
    text: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <input
            className="d-flex"
            type="text"
            placeholder="add new task"
            value={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})}
          />
          <button
            type="submit"
            onClick={() => this.props.addTask(this.state.text)}
          >
            Add Task
          </button>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
