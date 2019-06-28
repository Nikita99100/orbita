const month_list = ["Янв.","Февр.","Марта","Апр.","Мая","Июня","Июля","Авг.","Сент.","Окт.","Нояб.","Дек."];
var date = new Date();
function getFDate() {
    var s = (date.getMonth()+1)+"/";
    s += date.getDate()+"/";
    s += date.getFullYear();
    return s;
}
function getMaxDate() {
    var temp_date = addMonth(date,2);
    var s = (temp_date.getMonth()+1)+"/";
    s += temp_date.getDate()+"/";
    s += temp_date.getFullYear();
    return s;
}
function addDays(datenow, days) {
    var result = new Date(datenow);
    result.setDate(result.getDate() + days);
    return result;
}
function addMonth(datenow, months) {
    var result = new Date(datenow);
    result.setMonth(result.getMonth() + months);
    return result;
}




function openRoomList() {
    document.getElementById('big_block').style.display = "block";
}

window.onload=function() {
var departure = addDays(date,1);
    document.getElementById("arrival_date").innerHTML=date.getDate()+" "+month_list[date.getMonth()];
    document.getElementById("departure_date").innerHTML=departure.getDate()+" "+month_list[departure.getMonth()];
};
