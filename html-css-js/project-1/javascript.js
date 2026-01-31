function show(val){
    document.getElementById("out").value+=val;
}
function AC(){
    document.getElementById("out").value="";
}
function result(){
    document.getElementById("out").value=eval(document.getElementById("out").value);
}
