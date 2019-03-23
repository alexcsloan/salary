import React, { Component } from 'react';
import './EntryUpload.css';

class EntryUpload extends Component {
    // constructor(props){
    //     super(props);

    // }


    render() {
      return (

        <div className="Salary" style={{paddingTop: 0}}>
      
    
          <div style={{backgroundColor: "#0077B5", textAlign: "center"}}>
  
            <p id="title">Tech Salary Data</p>
  
          </div>

        <div id = "thanksDisplay" class="container center-align">
        <button id="returnHomeFromUpload" class="btn waves-effect purple waves-light" type="submit" name="action">Return Home
            <i class="material-icons right">home</i>
        </button>
        </div>
        </div>

        );
    }
  }

 
  
  export default EntryUpload;