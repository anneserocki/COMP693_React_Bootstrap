import React from 'react';
import { Badge, Button, Table, NavBar, Nav, Col, Modal } from 'react-bootstrap';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

class EmployeeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible
    }));
  }

  deleteEmployee() {
    // ...
    console.log('Employee deleted');
    
    // Hide the modal after deletion
    this.toggleModal();
  }

  render() {
    return (
      <tr>
        <td>{this.props.employee._id}</td>        
        <td>
          <Button variant="danger" onClick={this.toggleModal}>
            Delete
          </Button>
          <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete {this.props.employee.name}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.toggleModal}>
                Cancel
              </Button>
              <Button variant="danger" onClick={this.deleteEmployee}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
  }
}

function EmployeeTable(props) {
  // ...
}

export default class EmployeeList extends React.Component {
  // ...
}