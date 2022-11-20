/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const counterTotal = document.getElementById("btn__state");

document.getElementById("btn__element").addEventListener("click", count);

function count(e) {
    const oldCount = parseInt(counterTotal.innerHTML);
    const newCount = oldCount + 1;
    counterTotal.innerHTML = newCount;
}
