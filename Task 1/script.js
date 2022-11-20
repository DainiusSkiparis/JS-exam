/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const outputDiv = document.getElementById("output");
outputDiv.classList.add("answer");

document.getElementById('submit-btn').addEventListener('click', weightConverter);

function weightConverter(e) {

    e.preventDefault();
    let kg = Number(document.getElementById("search").value);

    if (!kg || isNaN(kg)) {
        outputDiv.innerHTML = "Wrong value!!! Please enter correct number...";
    }
    else {
        console.log(typeof kg)
        outputDiv.innerHTML = "";
        const p_lb = document.createElement("p");
        const p_g = document.createElement("p");
        const p_oz = document.createElement("p");
        p_lb.id = "answer_lb";
        p_g.id = "answer_g";
        p_oz.id = "answer_oz";
        outputDiv.appendChild(p_lb);
        outputDiv.appendChild(p_g);
        outputDiv.appendChild(p_oz);

        const lb = kg * 2.2046;
        const g = kg / 0.0010;
        const oz = kg * 35.274;

        document.getElementById("answer_lb").innerHTML = `${kg} kg = ${lb} lb`;
        document.getElementById("answer_g").innerHTML = `${kg} kg = ${g} g`;
        document.getElementById("answer_oz").innerHTML = `${kg} kg = ${oz} oz`;
    }



}
