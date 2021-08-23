import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {Form, FormControl, Navbar, Button, Nav} from "react-bootstrap";
import Results from "./Results";

export default class NavigationBar extends Component {
  state = {
    text: "",
    results: null,
    jobs: [],
  };
  render() {
    return (
      <>
        <Navbar
          bg="light"
          expand="lg"
          className="d-flex justify-content-between"
        >
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Form className="px-2">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              value={this.state.text}
              onChange={(e) => this.setState({text: e.target.value})}
            />
            <Button variant="outline-success">Add Items </Button>
          </Form>
        </Navbar>
      </>
    );
  }
}
