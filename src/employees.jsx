import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './EmployeeList.jsx';


let zak = "zak Ruvalcaba"
let anne = "Anne Chao"
let tom = "Tom Serocki"
let jerry = "Jerry Holler"
let sarah = "Sarah Miller"
let robert = "Robert Hayashi"


const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}} >
        <li>{zak.toUpperCase()}</li>
        <li>{anne}</li>
        <li>{tom}</li>
        <li>{jerry}</li>
        <li>{sarah}</li>
        <li>{robert}</li>        
    </ul>    
)
ReactDOM.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>, 
    document.getElementById('content')
)