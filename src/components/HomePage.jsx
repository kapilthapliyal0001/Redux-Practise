import React, {Component} from "react";
import AddTask from "./AddTask";
import NavigationBar from "./NavigationBar";
import TaskList from "./TaskList";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <AddTask />
        <TaskList />
        <div>Here i need to load the list</div>
      </div>
    );
  }
}
