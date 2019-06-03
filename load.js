


var current="#s0";
function fun(pos,data){
    $("#load").load(data);
    $(current).removeClass('active');
    $(pos).addClass('active');
    current=pos;
}




