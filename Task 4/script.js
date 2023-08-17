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

    const requestURL = './cars.json';
    const response = await fetch(requestURL);
    const cars = await response.json();

    cars.forEach(element => {
        const outputDiv = document.getElementById('output');

        const newCardDiv = document.createElement('div')
        outputDiv.appendChild(newCardDiv);

        const newLoginH3 = document.createElement('h3');
        newCardDiv.appendChild(newLoginH3);
        newLoginH3.innerHTML = element.brand;

        const newModelsList = document.createElement('ul')
        newCardDiv.appendChild(newModelsList);

        element.models.forEach((model) => {
            const list = document.createElement('li');
            list.innerText = model;
            newModelsList.appendChild(list);
        })
    });
}
carsList()


