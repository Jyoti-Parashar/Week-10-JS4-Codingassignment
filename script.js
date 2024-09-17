/**
 * 
 * 
 * 
 *  
<div id="p-div"></div>
<input id="p-input" type="text" placeholder="New Paragraph">
<button id="p-button">Create</button>
********************
 let paragraphId=0;
document.getElementById("p-button").addEventListener('click',()=>{
let parent=document.getElementById("p-div");

let newElement=document.createElement('p');
newElement.textContent=document.getElementById("p-input").value;
newElement.setAttribute('id', paragraphId++);
parent.appendChild(newElement);
document.getElementById("p-input").value='';
});
 * 
 */





/**
 *  Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
    A Bootstrap styled table representing your choice of data.
    A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
 * 
 */


//variable to hold value
// get button by Id
const btnsubmit = document.getElementById("btnsubmit");

let nameControl = document.getElementById("nameFormControl").value;
let emailControl = document.getElementById("emailFormControl").value;
let phoneControl = document.getElementById("phoneFormControl").value;
let messageControl = document.getElementById("messageFormControl").value;

// add event listner

btnsubmit.addEventListener('click',()=>{


let number=1;


//console.log(nameControl);
//console.log(emailControl);


//create table row

let newTableRow=document.createElement('tr');

// create data cell/place holder
// number cell
let numberNode=document.createElement('td');
// set data valye
numberNode.innerHTML=number
// append to the parent
newTableRow.append(numberNode);

// FirstName cell
let firstNameNode=document.createElement('td');
firstNameNode.innerHTML=nameControl;
newTableRow.append(firstNameNode);


// email cell
let emailNode=document.createElement('td');
emailNode.innerHTML=emailControl;
newTableRow.append(emailNode);

// phone cell
let phoneNode=document.createElement('td');
phoneNode.innerHTML=phoneControl;
newTableRow.append(phoneNode);

// message cell
let messageNode=document.createElement('td');
messageNode.innerHTML=messageControl;
newTableRow.append(messageNode);

console.log(newTableRow);
// add  child to the parent row 
document.getElementById('tBody').appendChild(newTableRow);

//empty all form controls
 document.getElementById("nameFormControl").value='';
 document.getElementById("emailFormControl").value='';
 document.getElementById("phoneFormControl").value='';
 document.getElementById("messageFormControl").value='';

number++;

})