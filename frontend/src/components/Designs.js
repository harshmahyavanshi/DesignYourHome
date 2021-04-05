import React from 'react';
import './App.css';
import {Button, Modal} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Navbar2 from './Navbar2';
class Designs extends React.Component{
  
  constructor() {
    super();
    this.state={
      show: false
    }
  }
  handleModal()
  {
    this.setState({ show: !this.state.show })
  }
  render(){
  return (
    <>
    <Navbar2 />
    <div>
      
      <Button onClick={()=>this.handleModal()}>Click here to get started</Button>
      <Modal show={this.state.show} onHide={()=>this.handleModal()}>
        <Modal.Header closeButton>Welcome to VID</Modal.Header>
        <Modal.Body>
          Design Your home
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>this.handleModal()}> Start from scratch</Button>
          <Button onClick={()=>this.handleModal()}> Use templates</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}
}
export default Designs