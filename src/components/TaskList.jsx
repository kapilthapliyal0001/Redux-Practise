import React, {Component} from "react";
import {connect, connnect} from "react-redux";
import {Container, Row} from "react-bootstrap";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  removeTask: (task) =>
    dispatch({
      type: "REMOVE_TASK",
      payload: task,
    }),
});

class TaskList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <ul>
            {this.props.task.map((task, i) => (
              <li
                key={i}
                onClick={() => this.props.removeTask(task)}
                style={{cursor: "pointer"}}
              >
                {task}
              </li>
            ))}
          </ul>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
