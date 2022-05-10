var no, username, dd, age, contact, btt ,table_b;


btt=document.querySelector("#btt");
var table_b=document.querySelector("#table_b")

btt.addEventListener("click",function(){
no=document.querySelector("#no").value;
username=document.querySelector("#username").value;
dd=document.querySelector("#Address").value;
age=document.querySelector("#Age").value;
contact=document.querySelector("#Contact").value;


var TR=document.createElement("tr");
var TDno=document.createElement("td");
var TDusername=document.createElement("td");
var TDAddress=document.createElement("td");
var TDAge=document.createElement("td");
var TDContact=document.createElement("td");
var TDed=document.createElement("td");
var bte=document.createElement("button");
var btd=document.createElement("button");

TR.appendChild(TDno);
TR.appendChild(TDusername);
TR.appendChild(TDAddress);
TR.appendChild(TDAge);
TR.appendChild(TDContact);
TR.appendChild(TDed);
TDed.appendChild(bte);
TDed.appendChild(btd);

TDno.innerText=no;
TDusername.innerText=username;
TDAddress.innerText=dd;
TDAge.innerText=age;
TDContact.innerText=contact;
bte.innerHTML="edit";
btd.innerHTML="delet";

table_b.appendChild(TR);

btd.addEventListener("click",function(){
    //debugger;
 console.log(this.parentNode);
// this.parentNode.parentNode.parentElement.removeChild(this.parentNode.parentNode)
table_b.removeChild(this.parentNode.parentNode)
});

});






