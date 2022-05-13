import React, { Component } from "react";
import Modal from './modal.js';
import './info.css';
class InfoButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  

  render() {
    return (
      <main>
        
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div>
            <title class="info-title">Important Information:</title>
            <br></br>
            <p>Expiration date: {this.props.props.date}</p>
            <p>Date Description: {this.props.props.dateDesc}</p>
            <p>Revenue Profit Sharing: {this.props.props.rev}</p>
            <p>Revenue Profit Sharing Description: {this.props.props.revDesc}</p>
          </div>
        </Modal>
        <button variant="primary" class="info-button" onClick={this.showModal}>
        <img src="https://i.ibb.co/rcWp0Rj/image.png" class= "ex" alt="image" border="0" ></img>       
         </button>
        

        </main>
    );
  }
}



export default InfoButton

