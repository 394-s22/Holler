import React, { Component } from "react";
import Modal from './modal.js';

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
        <h1>Information</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div>
            <p>Expiration date: {this.props.props.date}</p>
            <p>Date Description: {this.props.props.dateDesc}</p>
            <p>Revenue Profit Sharing: {this.props.props.rev}</p>
            <p>Revenue Profit Sharing Description: {this.props.props.revDesc}</p>
          </div>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    );
  }
}


export default InfoButton