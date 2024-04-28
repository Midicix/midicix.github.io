const Init=async()=>{
    let apiLink = "https://api.ipify.org/?format=json";
    let ip = (await fetch(apiLink).then(res => res.json())).ip;
    console.log(ip);
    


    apiLink = "https://ipinfo.io/json";
    // let values = await fetch(`https://api.ipapi.is?q=${ip}`)
    // .then(res => res.json())
    // .then(res => console.log(res));
    let response = await fetch(`https://api.ipapi.is?q=${ip}&key=8e142b99c62aca6a`);
    let values = await response.json();
    let table = document.querySelector('tbody');
    // console.log(values);
    // console.log(typeof values);
    for ([key, value] of Object.entries(values)){
        console.log("key:");
        console.log(key);
        console.log("value:");
        console.log(value);
        console.log(typeof value);

        if (typeof value == "object"){
            for ([k, v] of Object.entries(value)){
                tr = document.createElement('tr');
                table.insertBefore(tr, null);
                th1 = document.createElement('th');
                th1.innerHTML = k;
                tr.insertBefore(th1,null);
                th2 = document.createElement('th');
                th2.innerHTML = v;
                tr.insertBefore(th2,null);
            }
        }
        else{
            tr = document.createElement('tr');
            table.insertBefore(tr, null);
            th1 = document.createElement('th');
            th1.innerHTML = key;
            tr.insertBefore(th1,null);
            th2 = document.createElement('th');
            th2.innerHTML = value;
            tr.insertBefore(th2,null);
        }

    }

    let responses = await fetch(`https://neutrinoapi.net/ip-probe?User-ID=frt725siuth7&Api-Key=KhHgp4mgitOohttwcILSupNn8gicoZ70Ctg4ZIzHeRlymeCb&ip=194.233.98.38`);
    let valuess = await responses.json();
    console.log(valuess);
}