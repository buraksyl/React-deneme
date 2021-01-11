import React, { Component } from 'react'
import * as ReactBootStrap  from "react-bootstrap"; 
import logo from './film1.jpg'

export default class Card extends Component {
  render() {
    return (
      <div>
        
        <ReactBootStrap.Card style={{ width: '18rem' }}>
          <ReactBootStrap.Card.Img variant="top" src={logo}/>
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>Film Adı</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              Konu: Gizemli Bir adada yaşamını sürdüren...
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Button href="/Detail" variant="primary">Filmi İzle</ReactBootStrap.Button>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
      </div>
    )
  }
}



