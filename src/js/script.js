function getAge(){
    const born = 2005;
    contenu = document.getElementById("age");
    year = new Date();
    old = year.getFullYear() - born;
    contenu.innerText = old;
    getProgBegin(old);
}

function getProgBegin(old){
    contenu = document.getElementById("progBegin");
    progBegin = old - 15;
    contenu.innerText = progBegin;
}

function getElementForm(){
    nom = document.getElementById("lastName").value;
    prenom = document.getElementById("firstName").value;
    born = document.getElementById("born").value;
    email = document.getElementById("email").value;
    gender = document.getElementById("gender").value;
    text = document.getElementById("divtext").value;
    h4 = document.getElementById("testee").value;
    console.log(nom + ' --- ' + prenom + ' --- ' + born + ' --- ' + email + ' --- ' + gender + ' --- ' + text);
}

function getDay(){
    dateFull = new Date();
    year = dateFull.getFullYear();
    month = dateFull.getMonth();
    date = dateFull.getDate();
    day = dateFull.getDay();
    nameDay = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    nameMonth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    console.log(nameDay[day - 1] + ' ' + date + ' ' + nameMonth[month] + ' ' + year);
}

function getHour(){

    hr0 = document.getElementById("hr0");
    hr1 = document.getElementById("hr1");
    min0 = document.getElementById("min0");
    min1 = document.getElementById("min1");

    dateFull = new Date();
    year = String(dateFull.getFullYear());
    y0 = year[0];
    y1 = year[1];
    y2 = year[2];
    y3 = year[3];

    month = String(dateFull.getMonth() + 1);
    if (month.length == 1)
    {
        mo0 = '0';
        mo1 = month[0];
    }
    else
    {
        mo0 = month[0];
        mo1 = month[1];
    }

    date = String(dateFull.getDate());
    if (date.length == 1)
    {
        d0 = '0';
        d1 = date[0];
    }
    else
    {
        d0 = date[0];
        d1 = date[1];
    }

    hour = String(dateFull.getHours());
    if (hour.length == 1)
    {
        h0 = '0';
        h1 = hour[0];
    }
    else
    {
        h0 = hour[0];
        h1 = hour[1];
    }

    minutes = String(dateFull.getMinutes());
    if (minutes.length == 1)
    {
        m0 = '0';
        m1 = minutes[0];
    }
    else
    {
        m0 = minutes[0];
        m1 = minutes[1];
    }

    //console.log(y0 + y1 + y2 + y3 + ' ' + mo0 + mo1 + ' ' + d0 + d1 + ' ' + h0 + h1 + ':' + m0 + m1);
    
    hr0.innerText = h0;
    hr1.innerText = h1;
    min0.innerText = m0;
    min1.innerText = m1;

    setTimeout(getHour, 1000);
}

function calendar() {
    dateFull = new Date();
    date = String(dateFull.getDate());
    month = String(dateFull.getMonth());

    if (date.length == 1)
    {
        d0 = '0';
        d1 = date[0];
    }
    else
    {
        d0 = date[0];
        d1 = date[1];
    }
    realDate = d0 + d1;

    nameMonth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    IdMonth = document.getElementById("month");
    IdDate = document.getElementById("date");

    IdMonth.innerText = nameMonth[month];
    IdDate.innerText = realDate;
    
    setTimeout(calendar, 1000);
}