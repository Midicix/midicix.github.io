var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = '' + parseFloat(navigator.appVersion);
var nameOffset, verOffset, ix;

// In Opera, the true version is after "OPR" or after "Version"
if ((verOffset = nAgt.indexOf("OPR")) != -1) {
    browserName = "Opera";
}
// In MS Edge, the true version is after "Edg" in userAgent
else if ((verOffset = nAgt.indexOf("Edg")) != -1) {
    browserName = "Edge";
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
    (verOffset = nAgt.lastIndexOf('/'))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = navigator.appName;
    }
}






// console.log(window.location.href);
// console.log(window.location.hostname);
// console.log(window.location.pathname);
// console.log(window.location.protocol);
// console.log(window.location.assign());



let link = window.location.pathname.split('/');
// console.log(link[link.length - 2]);
const addon = addons.filter((addon) => String(addon.name).toLowerCase() == addonParam.toLowerCase());
// console.log(addon);


let ul = document.getElementById('ulPlatform');
let addonsFooter = document.getElementById('addonsFooter');
// console.log(addon[0]);
// console.log(addon[0].platform);
for (let [platformName, platformValue] of Object.entries(addon[0].platform)){
    // console.log(platformName);
    // console.log(platformValue);
    if (platformValue.isOnline){
        // console.log(platformName);
        // console.log(platformValue.link);
        // console.log(platformValue.icon);


        // let a = document.createElement('a');
        // a.href = platformValue.link;
        // a.target = "_Blank";
        // let li = document.createElement('li');
        // let span = document.createElement('span');
        // span.textContent = platformName;
        // let img = document.createElement('img');
        // img.src = `../../../../../userContent/pictures/${platformName.toLowerCase()}.png`;
        // img.className = 'plaformIcons';
        // ul.insertBefore(a, null);
        // a.insertBefore(li, null);
        // li.insertBefore(img, null);
        // li.insertBefore(span, null);
        
        let a = document.createElement('a');
        a.href = platformValue.link;
        a.target = "_Blank";
        let img = document.createElement('img');
        img.src = `../../../../userContent/pictures/${platformName.toLowerCase()}.png`;
        img.className = 'plaformIcons';
        addonsFooter.insertBefore(a, null);
        a.insertBefore(img, null);
    }
}

let addonContent = document.getElementById('addonContent');

let img = document.createElement('img');
img.src = '../' + addon[0].icon;
img.className = "addonReviewPicture";
img.draggable = false;

let addonPresentation = document.createElement('div');

// let addonName = document.createElement('h2');
// addonName.textContent = addon[0].name;
document.querySelector('h1').textContent = addon[0].name;

let addonPlot = document.createElement('p');
addonPlot.textContent = addon[0].summary;






let addonPlatformLink = "";
let addonPlatform = "";
let addonPlatformIcon = "";
let addonPlatformAdding = "";

if (browserName != "" && browserName.toLowerCase() != "safari"){
    addonPlatformLink = document.createElement('a');
    addonPlatformLink.className = "addonPlatformLink";
    addonPlatformLink.href = addon[0].platform[browserName.toLowerCase()].link;
    
    addonPlatform = document.createElement('div');
    addonPlatform.className = "addonPlatform";
    
    addonPlatformIcon = document.createElement('img');
    addonPlatformIcon.draggable = false;
    addonPlatformIcon.src = `../../../../userContent/pictures/${browserName.toLowerCase()}.png`;
    
    addonPlatformAdding = document.createElement('span');
    addonPlatformAdding.textContent = "Ajouter" + " " + addon[0].name + " " + "sur" + " " + browserName;
}



for (let paragraph of addon[0].paragraph){
    console.log(paragraph);
    console.log(paragraph.title);
    for (let line of paragraph.text){
        console.log(line);
    }
}


// addonContent.insertBefore(img, null);
addonContent.insertBefore(addonPresentation, null);


// addonPresentation.insertBefore(addonName, null);
addonPresentation.insertBefore(addonPlot, null);

addonPlot.insertBefore(img, addonPlot.firstChild);

if (browserName != "" && browserName.toLowerCase() != "safari"){
    addonContent.parentNode.insertBefore(addonPlatformLink, null);

    addonPlatformLink.insertBefore(addonPlatform, null);

    addonPlatform.insertBefore(addonPlatformIcon, null);
    addonPlatform.insertBefore(addonPlatformAdding, null);
}



console.log(addons);
console.table(addons);