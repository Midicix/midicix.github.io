const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);
let addonParam = "";
let temp = true;
let param = "";
for (const parameter of searchParams) {
    if (temp){
        param = parameter;
        break;
    }
    console.log(param);
    console.log(param[0]);
    console.log(param[1]);
}
if (param[0].toLowerCase() == "addon"){
    addonParam = param[1];
}