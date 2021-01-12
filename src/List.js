import React, { Component } from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'  

export default class List extends Component {
  render() {
    return (
      <div>
        <h3>Kategoriler</h3>
        <ListGroup>
          <ListGroupItem tag="a"><a>Aksiyon</a></ListGroupItem>
          <ListGroupItem tag="a">Macera</ListGroupItem>
          <ListGroupItem tag="a">Dram</ListGroupItem>
          <ListGroupItem tag="a">Bilim Kurgu</ListGroupItem>
          <ListGroupItem tag="a">Gerilim</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}


