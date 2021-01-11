import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">Film İzle</h5>
            <p>
            Film izlemek demek bir zamanlar yazlık sinemaların mahallemize gelmesini beklemek demekti. Bu bekleyiş sırasında da ailece acaba hangi filmin geleceğini konuşur ve seçme şansımızın dahi olmadığını fark etmezdik! Oysaki ilerleyen zaman ve teknoloji sayesinde sadece aradığımız filmlere değil aradığımız filmlerin kalite ve ses özelliklerine dahi kendimiz karar verme lüksüne sahip olduk. Yani filmleri karıncalı beyaz perdelerde izlemek yerine 720p ya da 1080p hatta hd film izle ve bluray görüntü ve ses kalitesiyle dahi izle imkânı bulabiliyoruz.

Artık hemen hemen herkesin evinde olan bilgisayarlar ve hatta akıllı telefonlar sayesinde film izle keyfimiz neredeyse sınırsız hale gelmiş durumda. İster bilgisayarlardan olsun isterse de akıllı telefonlardan sadece birkaç küçük ayarlama yaparak yalnızca yabancı filmleri türkçe altyazılı film izle seçeneği ile değil aynı zamanda da türkçe dublaj seçeneğiyle hd film izleme imkanına sahip oluyoruz.
            </p>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;