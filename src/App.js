// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//         constructor(props) {
//         super(props);
//         // this.onMove = this.onMove.bind(this);
//         // this.testVarible= "this is a test";
//         this.ws = new WebSocket("ws://localhost:8080");
//         this.data = "";
//     }

//     state = {}

//         componentDidMount() {
//         setInterval(this.wstest, 250);
//         // {this.wstest()}  
//       }
    
//     wstest = () => {
//       //grabbing a reference to this component
//         var myComponent=this;
//         //sending a message to the server
//         var timeReq = 'time';
//         this.ws.send(timeReq);

//         //when the server sends a message
//         this.ws.onmessage = function(e){
//           //set this component's data field to me the response from the server
//           myComponent.data=e.data;
//         }
//         //set the state's message field to the component's data
//         this.setState({message: this.data});
        
//     };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">{this.state.message}</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//                 </p>

//       </div>
//     );
//   }
// }

// export default App;




import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{paddingTop: 0}}>
      
      {/* <div class="container left-align"> */}
        <div style={{backgroundColor: "#0077B5", textAlign: "center"}}>

          <p id="title">Tech Salary Data</p>

        </div>
    
    {/* buttons to change from viewing salaries to making an entry */}
    <div class="container center-align">
      <a class="waves-effect waves-light btn disabled" id="searchSalaries"><i class="material-icons left">cloud</i>Search Salaries</a>
      <a> </a>
      <a class="waves-effect blue waves-light btn" id="makeAnEntry"><i class="material-icons left">cloud</i>Make an Entry</a>
    </div>

    <div class="container left-align" id="salaryHeader">
    <p class="info">Populate the below fields to see salary info:</p>
    </div>

{/* Job Category */}
  <div class="container center-align" id="searchFields">
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Job Category</label>
    </div>
    <select class="browser-default" id="jobCategories">
      <option value="" disabled selected>Make A Selection</option>
      <option value="1">Administration</option>
      <option value="2">Applications Development</option>
      <option value="3">Consulting & Systems Integration</option>
      <option value="4">Data/Database Administration</option>
      <option value="5">Networking/Telecommunications</option>
      <option value="6">Quality Assurance (QA)</option>
      <option value="7">Security</option>
      <option value="8">Software Development</option>
      <option value="9">Technical Services, Help Desk, & Operations</option>
      <option value="10">Web Development</option>
    </select>

{/* Job Title */}
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Job Title</label>
    </div>
    <select class="browser-default" id="jobTitles">
    </select>

{/* Job Type */}
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Job Type</label>
    </div>
    <select class="browser-default" id="jobType">
      <option value="" disabled selected>Make A Selection</option>
      <option value="1">Full-Time</option>
      <option value="2">Part-Time</option>
      <option value="3">Internship</option>
    </select>

{/* Years of Experience */}
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Experience</label>
    </div>
    <select class="browser-default" id="experience">
      <option value="" disabled selected>Make A Selection</option>
      <option value="1">Less than 1 Year</option>
      <option value="2">1-2 Years</option>
      <option value="3">2-4 Years</option>
      <option value="4">4-6 Years</option>
      <option value="5">6-8 Years</option>
      <option value="6">8-10 Years</option>
      <option value="7">More than 10 Years</option>
    </select>


{/* Education Level */}
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Education Level</label>
    </div>
    <select class="browser-default" id="education">
      <option value="" disabled selected>Make A Selection</option>
      <option value="1">None</option>
      <option value="2">High School/GED</option>
      <option value="3">Associate's Degree</option>
      <option value="4">Bachelor's Degree</option>
      <option value="5">Master's Degree</option>
      <option value="6">Doctorate Degree</option>
    </select>

{/* Have a form where people can request a job they don't see listed be added*/}

  </div>


    <div class="container left-align" style={{display: "none"}} id="entryHeader">
    <p class="info">Populate the below fields to make an entry:</p>
    </div>
{/* MAKE AN ENTRY */}
{/* Job Category */}
  <div class="container center-align" style={{display: "none"}} id="entrySearchFields">
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Job Category</label>
    </div>
    <select class="browser-default" id="entryJobCategories">
      <option value="" disabled selected>Make A Selection</option>
      <option value="1">Administration</option>
      <option value="2">Applications Development</option>
      <option value="3">Consulting & Systems Integration</option>
      <option value="4">Data/Database Administration</option>
      <option value="5">Networking/Telecommunications</option>
      <option value="6">Quality Assurance (QA)</option>
      <option value="7">Security</option>
      <option value="8">Software Development</option>
      <option value="9">Technical Services, Help Desk, & Operations</option>
      <option value="10">Web Development</option>
    </select>

{/* Job Title */}
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Job Title</label>
    </div>
    <select class="browser-default" id="entryJobTitles">
    </select>

{/* Job Type */}
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Job Type</label>
    </div>
    <select class="browser-default" id="entryJobType">
      <option value="" disabled selected>Make A Selection</option>
      <option value="1">Full-Time</option>
      <option value="2">Part-Time</option>
      <option value="3">Internship</option>
    </select>

{/* Years of Experience */}
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Experience</label>
    </div>
    <select class="browser-default" id="entryExperience">
      <option value="" disabled selected>Make A Selection</option>
      <option value="1">Less than 1 Year</option>
      <option value="2">1-2 Years</option>
      <option value="3">2-4 Years</option>
      <option value="4">4-6 Years</option>
      <option value="5">6-8 Years</option>
      <option value="6">8-10 Years</option>
      <option value="7">More than 10 Years</option>
    </select>


{/* Education Level */}
    <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Education Level</label>
    </div>
    <select class="browser-default" id="entryEducation">
      <option value="" disabled selected>Make A Selection</option>
      <option value="1">None</option>
      <option value="2">High School/GED</option>
      <option value="3">Associate's Degree</option>
      <option value="4">Bachelor's Degree</option>
      <option value="5">Master's Degree</option>
      <option value="6">Doctorate Degree</option>
    </select>

{/* Salary Input */}
    {/* <div class="right-align" style={{marginRight: 20}}>
    <label class="labelClass">Salary (USD)</label>
    </div> */}

    <input type="text" id="salaryInput" maxlength='9' placeholder="Enter Salary or Hourly Rate (USD)"></input>


{/* Have a form where people can request a job they don't see listed be added*/}

  </div>


      </div>
    );
  }
}

export default App;
