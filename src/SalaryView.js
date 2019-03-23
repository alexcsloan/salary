import React, { Component } from 'react';
import './SalaryView.css';

class SalaryView extends Component {
    // constructor(props){
    //     super(props);

    // }


    render() {
      return (

        <div className="Salary" style={{paddingTop: 0}}>
      
    
          <div style={{backgroundColor: "#0077B5", textAlign: "center"}}>
  
            <p id="title">Tech Salary Data</p>
  
          </div>

        <div id = "dataDisplay" class="container center-align">
        <button id="returnHomeFromSalaryView" class="btn waves-effect purple waves-light" type="submit" name="action">Return Home
            <i class="material-icons right">home</i>
        </button>
        <p id="averageSalary">The Average Salary is: </p>
        </div>
        </div>

        );
    }
  }

 
  
  export default SalaryView;