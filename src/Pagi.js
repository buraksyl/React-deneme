import React, { Component } from 'react'
import * as ReactBootStrap  from "react-bootstrap"; 

export default class Pagi extends Component {
  render() {
    return (
      <div>
        
        <ReactBootStrap.Pagination>
            <ReactBootStrap.Pagination.First />
            <ReactBootStrap.Pagination.Prev />
            <ReactBootStrap.Pagination.Item>{1}</ReactBootStrap.Pagination.Item>
            <ReactBootStrap.Pagination.Ellipsis />

            <ReactBootStrap.Pagination.Item>{10}</ReactBootStrap.Pagination.Item>
            <ReactBootStrap.Pagination.Item>{11}</ReactBootStrap.Pagination.Item>
            <ReactBootStrap.Pagination.Item active>{12}</ReactBootStrap.Pagination.Item>
            <ReactBootStrap.Pagination.Item>{13}</ReactBootStrap.Pagination.Item>
            <ReactBootStrap.Pagination.Item disabled>{14}</ReactBootStrap.Pagination.Item>

            <ReactBootStrap.Pagination.Ellipsis />
            <ReactBootStrap.Pagination.Item>{20}</ReactBootStrap.Pagination.Item>
            <ReactBootStrap.Pagination.Next />
            <ReactBootStrap.Pagination.Last />
        </ReactBootStrap.Pagination>
      </div>
    )
  }
}