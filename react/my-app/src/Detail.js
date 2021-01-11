import React, { Component } from "react";
import * as ReactBootStrap  from "react-bootstrap"; 
import Navi from './Navi'
import Footer from './Footer'
import { Media } from 'reactstrap';
import  {Container,Row,Col} from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './film1.jpg'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
function Detail(){
    return (
     
      <div>
        <Container>
          <Row>
            <Navi/>
          </Row>
         
            <Row className="detail">
                <Media>
                  <Media left>
                    <Media object src={logo} alt="Generic placeholder image" />
                  </Media>
                  <Media body className="detail-back">
                    <Media heading>
                      <h2>The Pianist</h2>
                    </Media>
                     Açıklama: Wladyslaw Szpilman, savaş patlak verdiğinde 27 yaşındaydı ve Polonyanın geleceği en parlak konser piyanistlerinden biriydi. 
                     Luftwaffede radyo istasyonu bombalandığında Chopinin C minor Nocturnenü çalıyordu.Tüm Yahudiler gibi o ve ailesi de evlerinden çıkartılarak Varşova gettolarına sürülmüştü. 
                    <p>Yönetmen: Roman Polanski</p>
                    <p>Oyuncular: Adrien Brody, Emilia Fox, Frank Finlay, Thomas Kretschmann</p>
                    <p>Tür: Biyografi, Dram, Müzikal</p>
                  </Media>
                </Media>
            </Row>
            <Row className="video-app">
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
            </Row>
          
          <Row><Footer/></Row>
        </Container>
      </div>
     
    );
  }

export default Detail;