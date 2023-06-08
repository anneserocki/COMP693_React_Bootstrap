import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './EmployeeList.jsx';
let zak = "zak Ruvalcaba";
let anne = "Anne Chao";
let tom = "Tom Serocki";
let jerry = "Jerry Holler";
let sarah = "Sarah Miller";
let robert = "Robert Hayashi";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, zak.toUpperCase()), /*#__PURE__*/React.createElement("li", null, anne), /*#__PURE__*/React.createElement("li", null, tom), /*#__PURE__*/React.createElement("li", null, jerry), /*#__PURE__*/React.createElement("li", null, sarah), /*#__PURE__*/React.createElement("li", null, robert));
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)), document.getElementById('content'));