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


for (let option of document.getElementById('selectNavigatorExtension').options){
    if (option.value.toUpperCase() == browserName.toUpperCase()){
        document.getElementById('selectNavigatorExtension').value = browserName;
    };
}

if (document.readyState){
    console.log('ready !');
}


let extensionSelection = document.getElementById('extensionSelection');


const setAddonsDisplay = () =>{
    const addonsPlaform = addons.filter((addon) => addon.platform[browserName.toLowerCase()].isOnline);
    resetAddonsDisplay();
    if (addonsPlaform.length > 0){
        for (let addon of addonsPlaform){
            let a = document.createElement('a');
            a.href = `./addons/review.html?addon=${addon.name}`;

            extensionSelection.insertBefore(a, null);

            let div = document.createElement('div');
            let title = document.createElement('span');
            let summary = document.createElement('p');
            let img = document.createElement('img');
            div.className = "addonsCard";
            title.textContent = addon.name;
            summary.textContent = addon.summary;
            img.src = addon.icon;

            a.draggable = false;
            img.draggable = false;

            a.insertBefore(div, null);
            div.insertBefore(img, null);
            div.insertBefore(title, null);
            div.insertBefore(summary, null);
        }
    }
    else{
        const message = `Aucune extension n'est proposée sur ${browserName}.`;
        let emptyAddons = document.createElement('span');
        emptyAddons.textContent = message;
        extensionSelection.insertBefore(emptyAddons, null);
    }
}

const resetAddonsDisplay = () =>{
    for (let addonsDiv of extensionSelection.children){
        addonsDiv.remove();
    }
}

setAddonsDisplay();





document.getElementById('selectNavigatorExtension').addEventListener(
    "click", 
    () => { document.getElementById('selectNavigatorExtension').addEventListener(
        "change", 
        () => {browserName = document.getElementById('selectNavigatorExtension').value.toLowerCase();setAddonsDisplay()}
    )}
)
