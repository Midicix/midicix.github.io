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