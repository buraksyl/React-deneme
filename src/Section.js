import React, { Component } from 'react';
import Anasayfa from './section/Anasayfa';
import {Route} from 'react-router-dom';


 export  class Section extends Component {
     render() {
         return (
             <section>
                 <Route path="/Anasayfa" component={Anasayfa} exact />
                
                 <Route path="/" component={Anasayfa}/>
             </section>
         )
     }
 }
 