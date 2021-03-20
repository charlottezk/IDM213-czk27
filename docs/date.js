const dd = document.getElementById("inputDay") + 1; 
var mm = document.getElementById("dd"); 
var today = new Date(); 
el_up.innerHTML = today; 
var dd = today.getDate(); 
var mm = today.getMonth() + 1; 

var yyyy = today.getFullYear(); 
if (dd < 10) { 
dd = '0' + dd; 
} 
if (mm < 10) { 
mm = '0' + mm; 
} 
var today = dd + '/' + mm + '/' + yyyy; 

function gfg_Run() { 
    el_down.innerHTML = today; 
} 