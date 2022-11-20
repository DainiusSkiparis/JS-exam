/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById("btn").addEventListener("click", requestData);
async function requestData() {
    const requestURL = 'https://api.github.com/users';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const dataText = await response.text();
    const card = JSON.parse(dataText);

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    const newCardContainer = document.createElement('div')
    outputDiv.appendChild(newCardContainer);

    card.forEach(element => {
        const newCardDiv = document.createElement('div')
        newCardContainer.appendChild(newCardDiv);

        const newLoginH3 = document.createElement('h3');
        newCardDiv.appendChild(newLoginH3);
        nameStr = element.login;
        nameStr = nameStr.charAt(0).toUpperCase() + nameStr.slice(1);
        newLoginH3.innerHTML = nameStr;

        const newImg = document.createElement('img');
        newCardDiv.appendChild(newImg);
        newImg.setAttribute('src', element.avatar_url)

        addStyle();

        function addStyle() {
            newCardContainer.style.width = "100%";
            newCardContainer.style.height = "100%";
            newCardContainer.style.display = "flex";
            newCardContainer.style.flexWrap = "wrap";
            newCardDiv.style.backgroundColor = "lightgrey";
            newCardDiv.style.borderRadius = "5px";
            newCardDiv.style.margin = "1% auto";
            newCardDiv.style.padding = "5px";
            newCardDiv.style.textAlign = "center";
            newImg.style.width = "200px";
            newImg.style.height = "200px";
            newImg.style.borderRadius = "5px";
        }
    });
}
