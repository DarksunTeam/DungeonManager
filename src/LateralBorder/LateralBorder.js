import React from '../../node_modules/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LateralBorder extends React.Component {
  
  constructor( props ) {
    super( props );
    this.state = {
      selectedButton: props.selectedButton,
      buttons: props.buttons,
      changeScreen: props.changeScreen
    };
  }

  handleActiveButton = button => {
    this.setState({selectedButton: button.id});
    this.state.changeScreen(button);
  }
  
  render( ){
    let appIcon = "/img/DungeonManager.png";
    if( window && window.process && window.process.type ) {
      const ipcRenderer = window.require( "electron" ).ipcRenderer;
      appIcon = ipcRenderer.sendSync( "isDev" ) ? "/img/DungeonManagerHomologacao.png" : "/img/DungeonManager.png";
    }

    return (
      <div id="blacklateralBorder">
        <img id="appIcon" alt="" src={ appIcon }></img>
        <div id="menu-buttons">
          <BorderButtons buttons={this.state.buttons} onClick = {this.handleActiveButton} selectedButton = {this.state.selectedButton} />
        </div>
      </div>
    );
  }
}

class BorderButtons extends React.Component {

  render( ) {
    const {
      buttons,
      onClick,
      selectedButton
    } = this.props;

    return (
      buttons.map( button => 
        <button className={selectedButton === button.id ? "menu-button menu-button-selected" : "menu-button"}  onClick={ ( ) => onClick( button ) } >
          <div className="main-text">
            <FontAwesomeIcon icon={ button.icon } />
            <br />
            <span>{ button.text }</span>
          </div>
        </button>
      )
    )
  }
}

export default LateralBorder;
