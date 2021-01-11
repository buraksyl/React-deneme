import React, { Component } from 'react'
import * as ReactBootStrap  from "react-bootstrap"; 
import logo from './kral.jpg'

export default class Carousel extends Component {
  render() {
    return (
      <div>
        
            <ReactBootStrap.Carousel>
                    <ReactBootStrap.Carousel.Item>
                        <img className="d-block w-100" src={logo} alt="First slide"/>
                        <ReactBootStrap.Carousel.Caption>
                        <h4>Nobel Ödüllü Film</h4>
                        <p>Thomas Keneally’nin kitabından Steven Spielberg’in sinemaya uyarladığı ve
                           İkinci Dünya Savaşı sırasında sayısız insanı konsantrasyon kamplarından kurtaran Oskar Schindler’in gerçek hikâyesini anlatan film</p>
                        </ReactBootStrap.Carousel.Caption>
                    </ReactBootStrap.Carousel.Item>
                    <ReactBootStrap.Carousel.Item>
                    <img className="d-block w-100" src={logo} alt="First slide"/>

                        <ReactBootStrap.Carousel.Caption>
                        <h4>Second slide label</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </ReactBootStrap.Carousel.Caption>
                    </ReactBootStrap.Carousel.Item>
                    <ReactBootStrap.Carousel.Item>
                    <img className="d-block w-100" src={logo} alt="First slide"/>

                        <ReactBootStrap.Carousel.Caption>
                        <h4>Third slide label</h4>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </ReactBootStrap.Carousel.Caption>
                    </ReactBootStrap.Carousel.Item>
            </ReactBootStrap.Carousel>
      </div>
    )
  }
}


