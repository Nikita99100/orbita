function add_message(a) {
    if(a!='') {
        var p = document.getElementById('chat_container');
        var newElement = document.createElement('div');
        newElement.setAttribute('class', 'chat_out clearfix');
        newElement.innerHTML = "<span class='message'>" + a + "<span class=\"author\">" + getTimeNow() + "</span></span>";
        p.appendChild(newElement);
        document.getElementById("message_text").value = "";
        setTimeout(function () {
            answer();
        },1000);

    }
}
function answer() {
    var p = document.getElementById('chat_container');
    var newElement = document.createElement('div');
    newElement.setAttribute('class', 'chat_in clearfix');
    newElement.innerHTML = "<span class='message'>Здравствуйте! Мы постараемся решить Вашу проблему как можно быстрее.<span class=\"author\">"+getTimeNow()+"</span></span>";
    p.appendChild(newElement);
}

function getTimeNow()
{
    var date_now = new Date();
    var hours = date_now.getHours();
    var minutes = date_now.getMinutes();
    return check(hours)+":"+check(minutes);

    function check(i) {
        if(i<10)return "0"+i;
        else return i;
    }
}

function openAccess() {
    if(document.getElementById('room_number').value!='')
    {
        var elem = document.getElementById('stop_chat');
        elem.remove();
    }

}








