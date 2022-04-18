import React, { Component } from "react";
import "./App.css";
import Pages from "./pages";
import { ListGroup } from "react-bootstrap";
export default class App extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
  handleClick = () => {
    console.log(this);
  };
}
