/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

async function carsList() {
    const outputDiv = document.getElementById("output");
    outputDiv.classList.add("carbrand");

    const requestURL = './cars.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const carsText = await response.text();
    const cars = JSON.parse(carsText);

    const newCardContainer = document.createElement('div')
    outputDiv.appendChild(newCardContainer);

    cars.forEach(element => {
        const outputDiv = document.getElementById("output");

        const newCardDiv = document.createElement('div')
        outputDiv.appendChild(newCardDiv);

        const newLoginH3 = document.createElement('h3');
        newCardDiv.appendChild(newLoginH3);
        newLoginH3.innerHTML = element.brand;

        const newModelsList = document.createElement('ul')
        newCardDiv.appendChild(newModelsList);

        element.models.forEach((model) => {
            const list = document.createElement("li");
            list.innerText = model;
            newModelsList.appendChild(list);
        })
        addStyle();

        function addStyle() {
            outputDiv.style.width = "100%";
            outputDiv.style.height = "100%";
            outputDiv.style.display = "flex";
            outputDiv.style.flexWrap = "wrap";
            newCardDiv.style.backgroundColor = "lightgrey";
            newCardDiv.style.borderRadius = "5px";
            newCardDiv.style.margin = "1% auto";
            newCardDiv.style.padding = "5px";
            newModelsList.style.width = "150px";
            newModelsList.style.borderRadius = "5px";
            newModelsList.style.listStyleType = "none";
            newLoginH3.style.textAlign = "center";
        }
    });
}
carsList()


