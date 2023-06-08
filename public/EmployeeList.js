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
    t