import React from "react";
import Navi from './Navi'
import Footer from './Footer'
import { Media } from 'reactstrap';
import  {Container,Row,} from 'reactstrap';
import logo from './film1.jpg'
import 'video-react/dist/video-react.css';
function News(){
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
                      <h2>Critics' Choices Super Ödülleri Açıklandı!</h2>
                    </Media>
                    Kimler ödül sahibi oldu? 
                    The Critics Choice Association (CCA) tarafından belirlenen Critics' Choices Super Ödülleri 10 Ocak tarihinde resmi olarak açıklandı. The CW kanalında yayınlanan ödül töreni, yılın en popüler yapımlarına ev sahipliği yaptı. 
                    Aksiyon, bilim kurgu, fantastik, süper kahraman, animasyon gibi türlerde ödüller takdim edilirken hem dizi hem de film kategorilerine yer verildiği görüldü.
                  </Media>
                </Media>
            </Row>
            <Row className="detail">
                <Media>
                  <Media left>
                    <Media object src={logo} alt="Generic placeholder image" />
                  </Media>
                  <Media body className="detail-back">
                    <Media heading>
                      <h2>Critics' Choices Super Ödülleri Açıklandı!</h2>
                    </Media>
                    Kimler ödül sahibi oldu? 
                    The Critics Choice Association (CCA) tarafından belirlenen Critics' Choices Super Ödülleri 10 Ocak tarihinde resmi olarak açıklandı. The CW kanalında yayınlanan ödül töreni, yılın en popüler yapımlarına ev sahipliği yaptı. 
                    Aksiyon, bilim kurgu, fantastik, süper kahraman, animasyon gibi türlerde ödüller takdim edilirken hem dizi hem de film kategorilerine yer verildiği görüldü.
                  </Media>
                </Media>
            </Row>
            <Row className="detail">
                <Media>
                  <Media left>
                    <Media object src={logo} alt="Generic placeholder image" />
                  </Media>
                  <Media body className="detail-back">
                    <Media heading>
                      <h2>Critics' Choices Super Ödülleri Açıklandı!</h2>
                    </Media>
                    Kimler ödül sahibi oldu? 
                    The Critics Choice Association (CCA) tarafından belirlenen Critics' Choices Super Ödülleri 10 Ocak tarihinde resmi olarak açıklandı. The CW kanalında yayınlanan ödül töreni, yılın en popüler yapımlarına ev sahipliği yaptı. 
                    Aksiyon, bilim kurgu, fantastik, süper kahraman, animasyon gibi türlerde ödüller takdim edilirken hem dizi hem de film kategorilerine yer verildiği görüldü.
                  </Media>
                </Media>
            </Row>
            <Row className="detail">
                <Media>
                  <Media left>
                    <Media object src={logo} alt="Generic placeholder image" />
                  </Media>
                  <Media body className="detail-back">
                    <Media heading>
                      <h2>Critics' Choices Super Ödülleri Açıklandı!</h2>
                    </Media>
                    Kimler ödül sahibi oldu? 
                    The Critics Choice Association (CCA) tarafından belirlenen Critics' Choices Super Ödülleri 10 Ocak tarihinde resmi olarak açıklandı. The CW kanalında yayınlanan ödül töreni, yılın en popüler yapımlarına ev sahipliği yaptı. 
                    Aksiyon, bilim kurgu, fantastik, süper kahraman, animasyon gibi türlerde ödüller takdim edilirken hem dizi hem de film kategorilerine yer verildiği görüldü.
                  </Media>
                </Media>
            </Row>
           
          <Row><Footer/></Row>
        </Container>
      </div>
     
    );
  }

export default News;