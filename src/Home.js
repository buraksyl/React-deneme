import React, { Component } from "react";
import * as ReactBootStrap  from "react-bootstrap"; 
import Navi from './Navi'
import Card from './Card'
import List from './List'
import Pagi from './Pagi'
import Carousel from './Carousel'
import Footer from './Footer'
import  {Container,Row,Col} from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function Home(){
    return (
     
      <div>
        <Container>
          <Row>
            <Navi/>
          </Row>
          <Row className="carousel-slide">
            <Col xs="12">
            <Carousel/>
            </Col>
            
          </Row>
          <Row className="special"><h1>Filmler</h1> </Row>
          <Row className="loud">      
          <Col xs="3"><Card/></Col>
            <Col xs="3"><Card/></Col>
            <Col xs="3" id="list"><List/></Col>
                    
          </Row>
          <Row className="loud">       
            <Col xs="3"><Card/></Col>
            <Col xs="3"><Card/></Col>         
          </Row>
          <Row className="loud">       
            <Col xs="3"><Card/></Col>
            <Col xs="3"><Card/></Col>         
          </Row>
          
          
          <Row><Pagi/></Row>  
          <Row><Footer/></Row>
        </Container>
      </div>
     
    );
  }

export default Home;
