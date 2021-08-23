import React, {Component} from "react";

export default class Results extends Component {
  state = {
    test: "",
  };
  render() {
    return (
      <div>
        {this.props.results ? (
          <div>data loaded and need to be rendered</div>
        ) : (
          <div>search the jobs to see the results</div>
        )}
      </div>
    );
  }
}
