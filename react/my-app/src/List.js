import React, { Component } from 'react'
import * as ReactBootStrap  from "react-bootstrap"; 
import {ListGroup,ListGroupItem} from 'reactstrap'  

export default class List extends Component {
  render() {
    return (
      <div>
        <h3>Kategoriler</h3>
        <ListGroup>
          <ListGroupItem tag="a" href="#"><a href="#">Aksiyon</a></ListGroupItem>
          <ListGroupItem tag="a" href="#">Macera</ListGroupItem>
          <ListGroupItem tag="a" href="#">Dram</ListGroupItem>
          <ListGroupItem tag="a" href="#">Bilim Kurgu</ListGroupItem>
          <ListGroupItem tag="a" href="#">Gerilim</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}


