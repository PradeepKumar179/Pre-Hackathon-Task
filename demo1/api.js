var div=document.createElement("div");
div.innerHTML=`<input type="text" id="text">
<button type="button" onclick="foo()">search</button>
<div id="active"></div>`;
div.style.textAlign = "center";
document.body.append(div);

async function foo(){
    let cc = document.getElementById("text").value;
    let res = await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`);
    let res1 = await res.json();
    console.log(res1);
    let index = res1.length-1;
    var result = res1[index].Active;
    console.log(result);
    document.getElementById("active").innerText=`Total Active Cases:${result}`;

    let index1 = res1.length-1;
    var result = res1[index1].Recovered;
    console.log(result);
    document.getElementById("Recovered").innerText=`Total Recoverd Cases:${result}`;

    let index2 = res1.length-1;
    var result = res1[index2].Death;
    console.log(result);
    document.getElementById("Death").innerText=`Total Death Cases:${result}`;

}