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
    
    const response = await fetch(requestURL);
    const users = await response.json();

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    users.forEach(user => {
        const newCardDiv = document.createElement('div');
        outputDiv.appendChild(newCardDiv);

        const newLoginH3 = document.createElement('h3');
        newLoginH3.innerHTML = user.login.charAt(0).toUpperCase() + user.login.slice(1);
        newCardDiv.appendChild(newLoginH3);

        const newImg = document.createElement('img');
        newImg.setAttribute('src', user.avatar_url);
        newImg.style.width = "200px";
        newImg.style.height = "200px";

        newCardDiv.appendChild(newImg);

        newCardDiv.classList.add('user-card');
    });
}