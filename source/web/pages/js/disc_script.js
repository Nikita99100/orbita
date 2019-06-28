var scoreinforamtionopenned = false;
function openScoreInformation()
{
    csi = document.getElementById('content-score_information');
    sb = document.getElementById('score_block');
    if(scoreinforamtionopenned)
    {
        csi.innerHTML = '';
        sb.style.borderRadius = "10px";

        // var content_scorewidth =  csi.offsetWidth;
        //  csi.style.width = content_scorewidth+"px";
        //  csi.style.marginLeft="-105%";
        //  setTimeout(function(){ csi.style.marginTop="calc(-100% - 27px)";},500);

        //  csi.style.opacity = "0";
        // setTimeout(function () { csi.style.marginTop = "calc(-100% - 27px)";},600);
        scoreinforamtionopenned = false;

    }
   else
    {
        sb.style.borderRadius = "10px 10px 0 0";
        csi.innerHTML = scoreinformationcode;
        scoreinforamtionopenned = true;
    }



}

scoreinformationcode = '<div id = "score_information">\n' +
    '    <div style = "text-align: center"><b>Правила бонусной программы:</b></div><hr>\n' +
    '    \n' +
    '    <p>Если Вы забронируйте номер в гостинице «Орбита» через наше приложение,\n' +
    '    то за каждый прожитый в ней забронированный день, \n' +
    '    вне зависимости от уплаченной цены и категории номера, \n' +
    '    на Ваш бонусный счёт во вкладке «Спецпредложения» будут\n' +
    '    начисляться 100 бонусных баллов, \n' +
    '    которые равны 100 рублям.</p>\n' +
    '    <div style = "text-align: center"><b> 1 день = 100 баллов<br>\n' +
    '    100 баллов = 100 рублей</b></div>\n' +
    '    <p>Эти баллы можно использовать при следующем бронировании номера через наше \n' +
    '    приложение во вкладке «Бронирование».\n' +
    '    Они автоматически спишутся с Вашего баланса. Цена за номер станет меньше \n' +
    '        на сумму заработанных бонусных баллов.</p>\n' +
    '</div>';

