import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SalaryView from './SalaryView';
import EntryUpload from './EntryUpload';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// var socket = new WebSocket("ws://localhost:8080");
var socket = new WebSocket("ws://192.168.1.145:8080");

var msgFromServer = [];


//job categories dropdown
var jobCategories = document.getElementById('jobCategories');
var entryJobCategories = document.getElementById('entryJobCategories');

//setting job categories onchange function
jobCategories.onchange = function() {jobCategorySelection()};
entryJobCategories.onchange = function() {entryJobCategorySelection()};

//JOB SEARCH CATEGORY SELECTION
var jobCategory;
function jobCategorySelection(){
    var e = document.getElementById('jobCategories');
    jobCategory = e.options[e.selectedIndex].text;

    var jobTitles = document.getElementById('jobTitles');
    //getting rid of all job titles when a new job category is selected
    while (jobTitles.firstChild) {
        jobTitles.removeChild(jobTitles.firstChild);
    }


    //have "make a selection" appear in the job title box after a category is selected
    var makeOption = document.createElement("option");
    makeOption.value="";
    makeOption.disabled=true;
    makeOption.selected=true;
    makeOption.innerText="Make A Selection";

    jobTitles.appendChild(makeOption);
    // makeOption.setAttribute("disabled selected");
    // <option value="" disabled selected>Make A Selection</option>

    var length;
    var arr;
    if(jobCategory==="Administration"){
        length=administrationJobs.length;
        arr=administrationJobs;
    }else if(jobCategory==="Applications Development"){
        length=applicationsDevelopmentJobs.length;
        arr=applicationsDevelopmentJobs;
    }else if(jobCategory==="Consulting & Systems Integration"){
        length=consultingSystemsIntegrationJobs.length;
        arr=consultingSystemsIntegrationJobs;
    }else if(jobCategory==="Data/Database Administration"){
        length=databaseAdministrationJobs.length;
        arr=databaseAdministrationJobs;
    }else if(jobCategory==="Networking/Telecommunications"){
        length=networkingJobs.length;
        arr=networkingJobs;
    }else if(jobCategory==="Quality Assurance (QA)"){
        length=qualityAssuranceJobs.length;
        arr=qualityAssuranceJobs;
    }else if(jobCategory==="Security"){
        length=securityJobs.length;
        arr=securityJobs;
    }else if(jobCategory==="Software Development"){
        length=softwareDevelopmentJobs.length;
        arr=softwareDevelopmentJobs;
    }else if(jobCategory==="Technical Services, Help Desk, & Operations"){
        length=technicalServicesJobs.length;
        arr=technicalServicesJobs;
    }else if(jobCategory==="Web Development"){
        length=webDevelopmentJobs.length;
        arr=webDevelopmentJobs;
    }

    //filling in the job titles
        for(var i=0; i<length; i++){
            var option = document.createElement("option");
            option.text=arr[i];
            jobTitles.appendChild(option);
        }

    
}


//JOB UPLOAD CATEGORY SELECTION
var entryJobCategory;
function entryJobCategorySelection(){
    var e = document.getElementById('entryJobCategories');
    entryJobCategory = e.options[e.selectedIndex].text;

    var entryJobTitles = document.getElementById('entryJobTitles');
    //getting rid of all job titles when a new job category is selected
    while (entryJobTitles.firstChild) {
        entryJobTitles.removeChild(entryJobTitles.firstChild);
    }


    //have "make a selection" appear in the job title box after a category is selected
    var makeOption = document.createElement("option");
    makeOption.value="";
    makeOption.disabled=true;
    makeOption.selected=true;
    makeOption.innerText="Make A Selection";

    entryJobTitles.appendChild(makeOption);
    // makeOption.setAttribute("disabled selected");
    // <option value="" disabled selected>Make A Selection</option>

    var length;
    var arr;
    if(entryJobCategory==="Administration"){
        length=administrationJobs.length;
        arr=administrationJobs;
    }else if(entryJobCategory==="Applications Development"){
        length=applicationsDevelopmentJobs.length;
        arr=applicationsDevelopmentJobs;
    }else if(entryJobCategory==="Consulting & Systems Integration"){
        length=consultingSystemsIntegrationJobs.length;
        arr=consultingSystemsIntegrationJobs;
    }else if(entryJobCategory==="Data/Database Administration"){
        length=databaseAdministrationJobs.length;
        arr=databaseAdministrationJobs;
    }else if(entryJobCategory==="Networking/Telecommunications"){
        length=networkingJobs.length;
        arr=networkingJobs;
    }else if(entryJobCategory==="Quality Assurance (QA)"){
        length=qualityAssuranceJobs.length;
        arr=qualityAssuranceJobs;
    }else if(entryJobCategory==="Security"){
        length=securityJobs.length;
        arr=securityJobs;
    }else if(entryJobCategory==="Software Development"){
        length=softwareDevelopmentJobs.length;
        arr=softwareDevelopmentJobs;
    }else if(entryJobCategory==="Technical Services, Help Desk, & Operations"){
        length=technicalServicesJobs.length;
        arr=technicalServicesJobs;
    }else if(entryJobCategory==="Web Development"){
        length=webDevelopmentJobs.length;
        arr=webDevelopmentJobs;
    }

    //filling in the job titles
        for(var i=0; i<length; i++){
            var option = document.createElement("option");
            option.text=arr[i];
            entryJobTitles.appendChild(option);
        }

    
}

//find salaries button
var findSalariesBtn = document.getElementById('findSalaries');
findSalariesBtn.onclick = function() {findSalaries()};
var salaryData;
function findSalaries(){
    // mySocket.send("hello server");
    var a = document.getElementById('jobTitles');
    var jobTitle;
    if(a.options.length>0){
    jobTitle = a.options[a.selectedIndex].text;
    }else{
        jobTitle = "Make A Selection";
    }
    
    var b = document.getElementById('jobType');
    var jobType = b.options[b.selectedIndex].text;

    var c = document.getElementById('experience');
    var experience = c.options[c.selectedIndex].text;

    var d= document.getElementById('education');
    var education = d.options[d.selectedIndex].text;

    // var e= document.getElementById('locationSearch');
    // var location = e.options[e.selectedIndex].text;

    var location = document.getElementById('locationSearch').value;

    var e = document.getElementById('jobCategories');
    var jobCat = e.options[e.selectedIndex].text;

    //storing data in an array
    salaryData = [jobTitle,jobType,experience,education,location];
    
    if(salaryData[0]==="Make A Selection"||salaryData[1]==="Make A Selection"||jobCat==="Make A Selection"||
    salaryData[2]==="Make A Selection"||salaryData[3]==="Make A Selection"||salaryData[4]===""){
        console.log("All input fields must be filled out!");
        if(jobCat==="Make A Selection"){
            document.getElementById('jobCategories').style.backgroundColor="red";
        }else{
            document.getElementById('jobCategories').style.backgroundColor="white";
        }
        if(salaryData[0]==="Make A Selection"){
            document.getElementById('jobTitles').style.backgroundColor="red";
        }else{
            document.getElementById('jobTitles').style.backgroundColor="white";
        }
        if(salaryData[1]==="Make A Selection"){
            document.getElementById('jobType').style.backgroundColor="red";
        }else{
            document.getElementById('jobType').style.backgroundColor="white"; 
        }
        if(salaryData[2]==="Make A Selection"){
            document.getElementById('experience').style.backgroundColor="red";
        }else{
            document.getElementById('experience').style.backgroundColor="white";
        }
        if(salaryData[3]==="Make A Selection"){
            document.getElementById('education').style.backgroundColor="red";
        }else{
            document.getElementById('education').style.backgroundColor="white";
        }
        if(salaryData[4]===""){
            document.getElementById('locationSearch').style.backgroundColor="red";
        }else{
            // console.log("success");
            document.getElementById('locationSearch').style.backgroundColor="white";
        }

                //hide the component
                // document.getElementById('search').style.display='none';
                // ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        
        
                // ReactDOM.render(<SalaryView />, document.getElementById('salaryView'));
        
        return;
    }else{
        document.getElementById('jobCategories').style.backgroundColor="white";
        document.getElementById('jobTitles').style.backgroundColor="white";
        document.getElementById('jobType').style.backgroundColor="white"; 
        document.getElementById('experience').style.backgroundColor="white";
        document.getElementById('education').style.backgroundColor="white";
        document.getElementById('locationSearch').style.backgroundColor="white";
        console.log(salaryData);

        
        //sending salary data to server
        var salaryServerReq = "find"+ ":"+salaryData[0]+":"+salaryData[1]+":"+salaryData[2]+":"+salaryData[3]+":"+salaryData[4];
        socket.send(salaryServerReq);

        //hide the component
        document.getElementById('search').style.display='none';
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));

        ReactDOM.render(<SalaryView />, document.getElementById('salaryView'));
        
        //test printing the data...these are the values that we need to search the database for
        socket.onmessage = function(msg){
            var temp = msg.data;

            //if the server was unable to find any data
            if(temp=="nodata"){
                var sorry = document.createElement("p");
                sorry.innerText = "Sorry, no data available yet."
                sorry.classList.add("sorryMessage");
                document.getElementById("averageSalary").style.display="none";
                document.getElementById('dataDisplay').appendChild(sorry);
                
            //returning to home from the salary view screen
            var returnHomeFromUploadBtn = document.getElementById('returnHomeFromSalaryView');

            returnHomeFromUploadBtn.onclick = function() {returnHomeFromUpload()};
        
            function returnHomeFromUpload(){
                window.location.reload();
                }
                
                return;
            }
            msgFromServer = temp.split(":");
        
        if(msgFromServer[0]==="data"){
            console.log("success");

            var salary = document.createElement("p");
            salary.classList.add("salaryDisplay");

            var tempSalary = msgFromServer[1];
            var salLength = tempSalary.length;
            var theSalary = "$";
            

            if(salLength==4){
                theSalary+=tempSalary.charAt(0);
                theSalary+=",";
                theSalary+=tempSalary.charAt(1);
                theSalary+=tempSalary.charAt(2);
                theSalary+=tempSalary.charAt(3);
            }
            if(salLength==5){
                theSalary+=tempSalary.charAt(0);
                theSalary+=tempSalary.charAt(1);
                theSalary+=",";
                theSalary+=tempSalary.charAt(2);
                theSalary+=tempSalary.charAt(3);
                theSalary+=tempSalary.charAt(4);
            }
            if(salLength==6){
                theSalary+=tempSalary.charAt(0);
                theSalary+=tempSalary.charAt(1);
                theSalary+=tempSalary.charAt(2);
                theSalary+=",";
                theSalary+=tempSalary.charAt(3);
                theSalary+=tempSalary.charAt(4);
                theSalary+=tempSalary.charAt(5);
            }
            if(salLength==7){
                theSalary+=tempSalary.charAt(0);
                theSalary+=",";
                theSalary+=tempSalary.charAt(1);
                theSalary+=tempSalary.charAt(2);
                theSalary+=tempSalary.charAt(3);
                theSalary+=",";
                theSalary+=tempSalary.charAt(4);
                theSalary+=tempSalary.charAt(5);
                theSalary+=tempSalary.charAt(6);
            }
            

            salary.innerText = theSalary;
            document.getElementById('dataDisplay').appendChild(salary);
        // var job_title = document.createElement("p");
        // // job_title.innerText = salaryData[0];
        // job_title.innerText = msgFromServer[1];
        // var job_type = document.createElement("p");
        // // job_type.innerText = salaryData[1];
        // job_type.innerText = msgFromServer[2];
        // var _experience = document.createElement("p");
        // // _experience.innerText = salaryData[2];
        // _experience.innerText = msgFromServer[3];
        // var _education = document.createElement("p");
        // // _education.innerText = salaryData[3];
        // _education.innerText = msgFromServer[4];
        // var _location = document.createElement("p");
        // // _location.innerText = salaryData[4];
        // _location.innerText = msgFromServer[5];

        // document.getElementById('dataDisplay').appendChild(job_title);
        // document.getElementById('dataDisplay').appendChild(job_type);
        // document.getElementById('dataDisplay').appendChild(_experience);
        // document.getElementById('dataDisplay').appendChild(_education);
        // document.getElementById('dataDisplay').appendChild(_location);

        //returning to home from the salary view screen
        var returnHomeFromUploadBtn = document.getElementById('returnHomeFromSalaryView');

        returnHomeFromUploadBtn.onclick = function() {returnHomeFromUpload()};
        
        function returnHomeFromUpload(){
                window.location.reload();
            }
        }
    }

        // dbCollection.insert({ttl: data[0], type: data[1], exp: data[2], edu: data[3], loc: data[4], sal: data[5]});
        // var results = dbCollection.find({
        //     ttl: salaryData[0],
        //     type: salaryData[1],
        //     exp: salaryData[2],
        //     edu: salaryData[3],
        //     loc: salaryData[4]

        // });
        // console.log(results);
        // console.log(results.sal);
    }

}

//upload data button
var uploadDataBtn = document.getElementById('inputSalary');
uploadDataBtn.onclick = function() {inputSalaryData()};

function inputSalaryData(){
    var a = document.getElementById('entryJobTitles');
    var jobTitle;
    if(a.options.length>0){
    jobTitle = a.options[a.selectedIndex].text;
    }else{
        jobTitle = "Make A Selection";
    }
    
    var b = document.getElementById('entryJobType');
    var jobType = b.options[b.selectedIndex].text;

    var c = document.getElementById('entryExperience');
    var experience = c.options[c.selectedIndex].text;

    var d= document.getElementById('entryEducation');
    var education = d.options[d.selectedIndex].text;

    // var e= document.getElementById('locationSearch');
    // var location = e.options[e.selectedIndex].text;

    var salary = document.getElementById('salaryInput').value;
    var location = document.getElementById('locationInput').value;

    var e = document.getElementById('entryJobCategories');
    var jobCat = e.options[e.selectedIndex].text;

    var salaryFormat="";
    for(var i=0; i<salary.length; i++){
        if(salary.charAt(i)!=','){
            salaryFormat+=salary.charAt(i);
        }
    }


    if(salaryFormat.length<=3){
        var int = parseInt(salaryFormat);
        int*=2080;
        salaryFormat=int.toString();
    }

    console.log(salaryFormat);

    //storing data in an array
    var data = [jobTitle,jobType,experience,education,location,salaryFormat];
    
    if(data[0]==="Make A Selection"||data[1]==="Make A Selection"||jobCat==="Make A Selection"||
    data[2]==="Make A Selection"||data[3]==="Make A Selection"||data[4]===""||data[5]===""){
        console.log("All input fields must be filled out!");
        // console.log(data[0]);
        if(jobCat==="Make A Selection"){
            document.getElementById('entryJobCategories').style.backgroundColor="red";
        }else{
            document.getElementById('entryJobCategories').style.backgroundColor="white";
        }
        if(data[0]==="Make A Selection"){
            document.getElementById('entryJobTitles').style.backgroundColor="red";
        }else{
            document.getElementById('entryJobTitles').style.backgroundColor="white";
        }
        if(data[1]==="Make A Selection"){
            document.getElementById('entryJobType').style.backgroundColor="red";
        }else{
            document.getElementById('entryJobType').style.backgroundColor="white"; 
        }
        if(data[2]==="Make A Selection"){
            document.getElementById('entryExperience').style.backgroundColor="red";
        }else{
            document.getElementById('entryExperience').style.backgroundColor="white";
        }
        if(data[3]==="Make A Selection"){
            document.getElementById('entryEducation').style.backgroundColor="red";
        }else{
            document.getElementById('entryEducation').style.backgroundColor="white";
        }
        if(data[4]===""){
            document.getElementById('locationInput').style.backgroundColor="red";
        }else{
            document.getElementById('locationInput').style.backgroundColor="white";
        }
        if(data[5]===""){
            document.getElementById('salaryInput').style.backgroundColor="red";
        }else{
            document.getElementById('salaryInput').style.backgroundColor="white";
        }
        
        return;
    }else{
        document.getElementById('entryJobCategories').style.backgroundColor="white";
        document.getElementById('entryJobTitles').style.backgroundColor="white";
        document.getElementById('entryJobType').style.backgroundColor="white"; 
        document.getElementById('entryExperience').style.backgroundColor="white";
        document.getElementById('entryEducation').style.backgroundColor="white";
        document.getElementById('locationInput').style.backgroundColor="white";
        document.getElementById('salaryInput').style.backgroundColor="white";

        //sending salary data to server
        var salaryServerUpload = "entry"+ ":"+data[0]+":"+data[1]+":"+data[2]+":"+data[3]+":"+data[4]+":"+data[5];
        socket.send(salaryServerUpload);

        //hide the component
        document.getElementById('submit').style.display='none';
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        
        ReactDOM.render(<EntryUpload />, document.getElementById('uploadThanksView'));

        var thanksMsg = document.createElement("p");
        thanksMsg.innerText = "Thanks for Your Upload!";
        thanksMsg.classList.add("thankYou")
        document.getElementById('thanksDisplay').appendChild(thanksMsg);

        
        //returning to home from the input salary screen
        var returnHomeFromUploadBtn = document.getElementById('returnHomeFromUpload');

        returnHomeFromUploadBtn.onclick = function() {returnHomeFromUpload()};

        function returnHomeFromUpload(){
        //hide the component
        // document.getElementById('submit').style.display='block';
        // document.getElementById('uploadThanksView').style.display='none';
        // ReactDOM.unmountComponentAtNode(document.getElementById('uploadThanksView'));
            
        // ReactDOM.render(<App />, document.getElementById('root'));
        window.location.reload();
        }

    }

}


var administrationJobs = [];
administrationJobs[0] = "Chief Information Officer (CIO)";
administrationJobs[1] = "Chief Security Officer (CSO)";
administrationJobs[2] = "Chief Technology Officer (CTO)";
administrationJobs[3] = "Director of Technology";
administrationJobs[4] = "Vice President of Information Technology";

var applicationsDevelopmentJobs = [];
applicationsDevelopmentJobs[0] = "Applications Architect";
applicationsDevelopmentJobs[1] = "Business Systems Analyst";
applicationsDevelopmentJobs[2] = "Cloud Computing Analyst";
applicationsDevelopmentJobs[3] = "CRM Business Analyst";
applicationsDevelopmentJobs[4] = "CRM Technical Developer";
applicationsDevelopmentJobs[5] = "Developer/Programmer Analyst";
applicationsDevelopmentJobs[6] = "ERP Business Analyst";
applicationsDevelopmentJobs[7] = "ERP Technical Developer";
applicationsDevelopmentJobs[8] = "ERP Technical/Functional Analyst";
applicationsDevelopmentJobs[9] = "Lead Applications Developer";
applicationsDevelopmentJobs[10] = "Manager";
applicationsDevelopmentJobs[11] = "Mobile Applications Developer";
applicationsDevelopmentJobs[12] = "Project Manager";
applicationsDevelopmentJobs[13] = "Systems Analyst";
applicationsDevelopmentJobs[14] = "Technical Writer";

var consultingSystemsIntegrationJobs = [];
consultingSystemsIntegrationJobs[0]= "Director";
consultingSystemsIntegrationJobs[1]= "Project Manager/Senior Consultant";
consultingSystemsIntegrationJobs[2]= "Staff Consultant";

var databaseAdministrationJobs = [];
databaseAdministrationJobs[0] = "Big Data Engineer";
databaseAdministrationJobs[1] = "Business Intelligence Analyst";
databaseAdministrationJobs[2] = "Data Analyst/Report Writer";
databaseAdministrationJobs[3] = "Data Architect";
databaseAdministrationJobs[4] = "Data Modeler";
databaseAdministrationJobs[5] = "Data Reporting Analyst";
databaseAdministrationJobs[6] = "Data Scientist";
databaseAdministrationJobs[7] = "Data Warehouse Analyst";
databaseAdministrationJobs[8] = "Database Administrator";
databaseAdministrationJobs[9] = "Database Developer";
databaseAdministrationJobs[10] = "Database Manager";

var networkingJobs = [];
networkingJobs[0] = "Network Administrator";
networkingJobs[1] = "Network Architect";
networkingJobs[2] = "Network Engineer";
networkingJobs[3] = "Network Manager";
networkingJobs[4] = "NOC Technician";
networkingJobs[5] = "Telecommunication Specialist";
networkingJobs[6] = "Telecommunications Manager";
networkingJobs[7] = "Wireless Network Engineer";

var qualityAssuranceJobs = [];
qualityAssuranceJobs[0]= "QA Associate/Analyst";
qualityAssuranceJobs[1]= "QA Engineer - Automated";
qualityAssuranceJobs[2]= "QA Engineer - Manual";
qualityAssuranceJobs[3]= "QA/Testing Manager";

var securityJobs = [];
securityJobs[0] = "Data Security Analyst";
securityJobs[1] = "Information Systems Security Manager";
securityJobs[2] = "IT Auditor";
securityJobs[3] = "Network Security Administrator";
securityJobs[4] = "Network Security Engineer";
securityJobs[5] = "Systems Security Administrator";

var softwareDevelopmentJobs = [];
softwareDevelopmentJobs[0] = "Product Manager";
softwareDevelopmentJobs[1] = "Software Developer";
softwareDevelopmentJobs[2] = "Software Engineer";

var technicalServicesJobs = [];
technicalServicesJobs[0] = "Business Continuity Analyst";
technicalServicesJobs[1] = "Cable Technician";
technicalServicesJobs[2] = "Computer Operator";
technicalServicesJobs[3] = "Desktop Support Analyst";
technicalServicesJobs[4] = "Hardware Analyst";
technicalServicesJobs[5] = "Help Desk Tier 1";
technicalServicesJobs[6] = "Help Desk Tier 2";
technicalServicesJobs[7] = "Help Desk Tier 3";
technicalServicesJobs[8] = "Instructor/Trainer";
technicalServicesJobs[9] = "Mainframe Systems Programmer";
technicalServicesJobs[10] = "Manager";
technicalServicesJobs[11] = "Mobile Device Support Analyst";
technicalServicesJobs[12] = "PC Technician";
technicalServicesJobs[13] = "Product Support Specialist";
technicalServicesJobs[14] = "Site Reliability Engineer";
technicalServicesJobs[15] = "Systems Administrator";
technicalServicesJobs[16] = "Systems Engineer";

var webDevelopmentJobs = [];
webDevelopmentJobs[0] = "DevOps Engineer";
webDevelopmentJobs[1] = "E-Commerce Analyst";
webDevelopmentJobs[2] = "Front-End Web Developer";
webDevelopmentJobs[3] = "Senior Web Developer";
webDevelopmentJobs[4] = "Web Administrator";
webDevelopmentJobs[5] = "Web Designer";
webDevelopmentJobs[6] = "Web Developer";

//changing the display of the page when "make an entry" button is clicked
var makeAnEntryBtn = document.getElementById('makeAnEntry');

makeAnEntryBtn.onclick = function() {makeEntry()};

//when the make entry button is pressed
function makeEntry(){
    // window.location.reload();
    var pageDisplay = document.getElementById('searchFields');
    pageDisplay.style.display="none";
    //disabling make an entry button
    makeAnEntryBtn.classList.add("disabled");

    //enabling search salaries button
    var searchSalariesBtn = document.getElementById('searchSalaries');
    searchSalariesBtn.classList.remove('disabled');


    document.getElementById('entrySearchFields').style.display="block";
    document.getElementById('salaryHeader').style.display="none";
    document.getElementById('entryHeader').style.display="block";

    //input salary button
    document.getElementById('search').style.display="none";
    document.getElementById('submit').style.display="block";
    
}

//changing the display of the page when "search salaries" button is clicked
var searchSalariesBtn = document.getElementById('searchSalaries');

searchSalariesBtn.onclick = function() {searchSalary()};

//when the search salaries button is pressed
function searchSalary(){
    // window.location.reload();
    var pageDisplay = document.getElementById('searchFields');
    pageDisplay.style.display="block";
    // pageDisplay.style.display="none";
    // //disabling make an entry button
    makeAnEntryBtn.classList.remove("disabled");

    //disabling search salaries button
    var searchSalariesBtn = document.getElementById('searchSalaries');
    searchSalariesBtn.classList.add('disabled');

    document.getElementById('entrySearchFields').style.display="none";

    document.getElementById('entryHeader').style.display="none";
    document.getElementById('salaryHeader').style.display="block";

    //find salaries button
    document.getElementById('submit').style.display="none";
    document.getElementById('search').style.display="block";
    
}


//making sure salary entry box gets data in right format
var salaryBox = document.getElementById('salaryInput');

salaryBox.onkeydown = function(event) {salaryKeyPress(event)};

function salaryKeyPress(event){
    console.log(event.keyCode);
    if((event.keyCode<48 || event.keyCode>57 ||event.keyCode===188) && (event.keyCode!==8)){
        event.preventDefault();
    }

    if(event.keyCode===188||event.keyCode==9){
        return;
    }
    
    var keyStr = salaryBox.value;
    if(keyStr.length===0&&(event.keyCode===48||event.keyCode===188)){
        event.preventDefault();
    }

    if(keyStr.length===9&&event.keyCode===8){
        // console.log("made it");
        var temp5='';
        temp5+=keyStr.charAt(0);
        temp5+=keyStr.charAt(2);
        temp5+=keyStr.charAt(3);
        temp5+=',';
        temp5+=keyStr.charAt(4);
        temp5+=keyStr.charAt(6);
        temp5+=keyStr.charAt(7);
        temp5+=keyStr.charAt(8);
        salaryBox.value=temp5;
    }

    if(keyStr.length===3&&keyStr.charAt(1)!==','&&keyStr.charAt(2)!==','){
        if(event.keyCode!==8){
        var temp='';
        temp+=keyStr.charAt(0);
        temp+=',';
        temp+=keyStr.charAt(1);
        temp+=keyStr.charAt(2);
        salaryBox.value=temp; 
        }
    }

    if(keyStr.length===5&&keyStr.charAt(2)!==','){
        if(event.keyCode!==8){
        var temp2='';
        temp2+=keyStr.charAt(0);
        temp2+=keyStr.charAt(2);
        temp2+=',';
        temp2+=keyStr.charAt(3);
        temp2+=keyStr.charAt(4);
        salaryBox.value=temp2; 
        }else{
            temp2='';
            temp2+=keyStr.charAt(0);
            temp2+=keyStr.charAt(2);
            temp2+=keyStr.charAt(3);
            temp2+=keyStr.charAt(4);
            salaryBox.value=temp2;
        }
    }

    if(keyStr.length===6&&keyStr.charAt(3)!==','&&keyStr.charAt(5)!==','){
        if(event.keyCode!==8){
        var temp3='';
        temp3+=keyStr.charAt(0);
        temp3+=keyStr.charAt(1);
        temp3+=keyStr.charAt(3);
        temp3+=',';
        temp3+=keyStr.charAt(4);
        temp3+=keyStr.charAt(5);
        salaryBox.value=temp3; 
        }else{
            temp3='';
            temp3+=keyStr.charAt(0);
            temp3+=',';
            temp3+=keyStr.charAt(1);
            temp3+=keyStr.charAt(3);
            temp3+=keyStr.charAt(4);
            temp3+=keyStr.charAt(5);
            salaryBox.value=temp3;
        }
    }

    if(keyStr.length===7&&keyStr.charAt(1)!==','&&keyStr.charAt(5)!==','){
        if(event.keyCode!==8){
        var temp4='';
        temp4+=keyStr.charAt(0);
        temp4+=',';
        temp4+=keyStr.charAt(1);
        temp4+=keyStr.charAt(2);
        temp4+=keyStr.charAt(4);
        temp4+=',';
        temp4+=keyStr.charAt(5);
        temp4+=keyStr.charAt(6);
        salaryBox.value=temp4; 
        }else{
            temp4='';
            temp4+=keyStr.charAt(0);
            temp4+=keyStr.charAt(1);
            temp4+=',';
            temp4+=keyStr.charAt(2);
            temp4+=keyStr.charAt(4);
            temp4+=keyStr.charAt(5);
            temp4+=keyStr.charAt(6);
            salaryBox.value=temp4; 
        }

    }

}

// var returnHomeFromUploadBtn = document.getElementById('returnHomeFromUpload');
// returnHomeFromUploadBtn.onclick = function() {returnHomeFromUpload()};

// function returnHomeFromUpload(){
//     //hide the component
//     document.getElementById('submit').style.display='block';
//     document.getElementById('uploadThanksView').style.display='none';
//     ReactDOM.unmountComponentAtNode(document.getElementById('uploadThanksView'));
            
//     ReactDOM.render(<App />, document.getElementById('root'));
// }


