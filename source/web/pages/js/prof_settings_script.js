function fillData(username) {
    switch (username) {
        case 'dorosh':
                $('#YourName').attr("value", "Дарья");
                $('#SecondName').attr("value","Дорошенко");
                $('#DadName').attr("value", "Дмитриевна");
                $('#Country').attr("value", "Россия");
                $('#BirthDate').attr("value", "1997-08-15");
                $('#City').attr("value", "Санкт-Петербург");
                $('#YourMail').attr("value", "dddoroshenko@mail.ru");
                $('#YourTel').attr("value", "8(911)213-72-32");
                $('#YourPass').attr("value", "YaTvoyaMama228");
            break;

            case 'nikotin':
                $('#YourName').attr("value", "Никита");
                $('#SecondName').attr("value","Старченко");
                $('#DadName').attr("value", "Дмитриевич");
                $('#Country').attr("value", "Россия");
                $('#BirthDate').attr("value", "1999-05-31");
                $('#City').attr("value", "Владикавказ");
                $('#YourMail').attr("value", "nik-star99@mail.ru");
                $('#YourTel').attr("value", "8(999)000-54-3");
                $('#YourPass').attr("value", "228");
            break;
    }
    changeAvatar();
}
function changeAvatar()
{
    avatar_e = $('#avatar')[0];
    yourname_e = $('#YourName')[0];
    avatar_e.innerHTML =   '<p style = "position: relative; top: 50%; transform: translateY(-50%);">' +yourname_e.value[0]; + '</p>'
}