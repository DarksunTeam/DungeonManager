import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './style.css'

import ElectronCustomization from './ElectronCustomization/ElectronCustomization';
import LateralBorder from './LateralBorder/LateralBorder';
import { faSkull, faTheaterMasks, faHandSparkles, faCommentDots } from '@fortawesome/free-solid-svg-icons';

class DungeonManager extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      selectedScreen: 1,
      buttons: [
        { id: 1, icon: faSkull, text:"Combate" },
        { id: 2, icon:faTheaterMasks, text:"Personagens" },
        { id: 3, icon:faHandSparkles, text:"Efeitos" },
        { id: 4, icon:faCommentDots, text:"Sobre" }
      ]
    };
  }

  changeScreen = button => {
    this.setState({selectedScreen: button.id});
  }

  render( ){
    return (
      <div id="content">
        <header>
          <ElectronCustomization/>
        </header>
        <div className="container-fluid background">
          <div className="row justify-content-begin background">
            <LateralBorder selectedButton={this.state.selectedScreen} buttons={this.state.buttons} changeScreen={this.changeScreen}/>
            <div className="justify-content-begin">
              {this.state.selectedScreen}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DungeonManager;
