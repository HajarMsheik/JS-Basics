
function calculate(){
    var result="";
    var shoesnb=document.getElementById("shoe_size").value;
    var year=document.getElementById("year").value;
    shoesnb =shoesnb*2;
    shoesnb +=5;
    shoesnb =shoesnb*50;
    result=year-shoesnb;
    result += 1766;
    alert("the result is :"+result);

}
