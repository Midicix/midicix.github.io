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
    nom = document.getElementById("lastName");
    prenom = document.getElementById("firstName");
    born = document.getElementById("born");
    email = document.getElementById("email");
    gender = document.getElementById("gender");
    text = document.getElementById("divtext");
    h4 = document.getElementById("testee");
    console.log(nom + prenom + born + email + gender + text);
}

function getDay(){
    dateFull = new Date();
    year = dateFull.getFullYear();
    month = dateFull.getMonth();
    date = dateFull.getDate();
    day = dateFull.getDay();
    nameDay = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    nameMonth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    console.log(year + ' ' + nameMonth[month] + ' ' + date + ' ' + nameDay[day - 1]);
}