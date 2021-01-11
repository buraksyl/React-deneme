import React, { Component } from 'react'
import * as ReactBootStrap  from "react-bootstrap"; 

export default class Card extends Component {
  render() {
    return (
      <div>
        
        <ReactBootStrap.Navbar bg="dark" variant="dark">
              <ReactBootStrap.Navbar.Brand href="./Home">Filmgünü</ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.Nav.Link href="/Home">Film İzle</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/News">Haberler</ReactBootStrap.Nav.Link>

                <ReactBootStrap.NavDropdown title="Kategori" id="collasible-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="#action/3.1">Aksiyon</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.2">Macera</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.3">Dram</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.4">Bilim Kurgu</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.5">Gerilim</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                </ReactBootStrap.NavDropdown>

              </ReactBootStrap.Nav>
              <ReactBootStrap.Form inline>
                <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
              </ReactBootStrap.Form>
            </ReactBootStrap.Navbar>
      </div>
    )
  }
}



