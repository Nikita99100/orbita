
function disc_f()
{
    select_wind('disc');
}
function home_f()
{
    select_wind('main');
}
function chat_f()
{
    select_wind('chat');
}
function sett_f()
{
    select_wind('settings');
}
function bed_f()
{
    select_wind('rooms');
}

function select_wind(selected_wind) {
    clearAll();
    switch (selected_wind) {
        case 'disc':
            document.getElementById("iframe_disc").hidden = false;
            document.getElementById("discond").src = "img/icons/discond_a.png";
            break;
        case 'main':
            document.getElementById("iframe_main").hidden = false;
            document.getElementById("home").src = "img/icons/home_a.png";
            break;
        case 'chat':
            document.getElementById("iframe_chat").hidden = false;
            document.getElementById("chat").src = "img/icons/chat_a.png";
            break;
        case 'rooms':
            document.getElementById("iframe_rooms").hidden = false;
            document.getElementById("bed").src = "img/icons/bed_a.png";
            break;
        case 'settings':
            document.getElementById("iframe_settings").hidden = false;
            document.getElementById("settings").src = "img/icons/settings_a.png";
            break;
    }
}
    function clearAll() {
        document.getElementById("iframe_disc").hidden=true;
        document.getElementById("iframe_main").hidden=true;
        document.getElementById("iframe_chat").hidden=true;
        document.getElementById("iframe_rooms").hidden=true;
        document.getElementById("iframe_settings").hidden=true;

        document.getElementById("discond").src = "img/icons/discond.png";
        document.getElementById("home").src = "img/icons/home.png";
        document.getElementById("bed").src = "img/icons/bed.png";
        document.getElementById("chat").src = "img/icons/chat.png";
        document.getElementById("settings").src = "img/icons/settings.png";
    }
