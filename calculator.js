var val=document.getElementById('result');

function data(input){
val.value+=input;
val.style.backgroundColor='#9aa592';
};
function claerdata(){
val.value="";
val.style.backgroundColor='#9aa592';
}
function oprator(arth){
 val.value + val.value;
}
function delet(){
   const del =val.value;
   val.value=del.slice(0,-1);
    }
function equal(){
    try{

        val.value=eval(val.value);
        val.style.backgroundColor='#9aa592'
    }
    catch(error)
    {
(val.value= " syn erro");
val.style.backgroundColor='red'
    }
}

function squre(){
    val.value=Math.sqrt(val.value);
}