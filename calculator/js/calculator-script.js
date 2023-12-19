function displayvalue(val){
 document.getElementById("display").value = document.getElementById("display").value + val;
}

function cleardisplay(){
    document.getElementById("display").value = "";
}
function calculate(){
    var userinput= document.getElementById("display").value;
    var res = eval(userinput);
    document.getElementById('display').value = res;
}