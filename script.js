/**
 *  Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
    A Bootstrap styled table representing your choice of data.
    A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
 * 
 */





const btnsubmit = document.getElementById("btnsubmit");

btnsubmit.addEventListener('click',()=>{


let number=1;
//variable to hold value
let nameControl = document.getElementById("nameFormControl").value;
let emailControl = document.getElementById("emailFormControl").value;
let phoneControl = document.getElementById("phoneFormControl").value;
let messageControl = document.getElementById("messageFormControl").value;

//console.log(nameControl);
//console.log(emailControl);


//create table row

let newTableRow=document.createElement('tr');


let numberNode=document.createElement('td');
numberNode.innerHTML=number
newTableRow.append(numberNode);

let firstNameNode=document.createElement('td');
firstNameNode.innerHTML=nameControl;
newTableRow.append(firstNameNode);

let emailNode=document.createElement('td');
emailNode.innerHTML=emailControl;
newTableRow.append(emailNode);


let phoneNode=document.createElement('td');
phoneNode.innerHTML=phoneControl;
newTableRow.append(phoneNode);


let messageNode=document.createElement('td');
messageNode.innerHTML=messageControl;
newTableRow.append(messageNode);

console.log(newTableRow);
document.getElementById('tBody').appendChild(newTableRow);

 document.getElementById("nameFormControl").value='';
 document.getElementById("emailFormControl").value='';
 document.getElementById("phoneFormControl").value='';
 document.getElementById("messageFormControl").value='';

number++;

})