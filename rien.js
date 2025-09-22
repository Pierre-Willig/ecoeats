let time=0;
let timeOut = 1000;
let price = 60;
let ticks;
let secondGeneratorOneBasePrice = 100;
let secondGeneratorOneRealPrice = 100;
let secondGeneratorBaseOwned = 0;
let secondGeneratorOwnedTotal = 0;
let secondGeneratorTwoBasePrice = 1500;
let secondGeneratorTwoBaseOwned = 0;
let secondGeneratorTwoOwnedTotal = 0;
let secondGeneratorTwoRealPrice = 1500;

function updateTime() {
    secondGeneratorOwnedTotal += secondGeneratorTwoOwnedTotal;
    time += 1 + (1 * secondGeneratorOwnedTotal);
    document.getElementById("rien").innerHTML = time;
    document.getElementById("prix").innerHTML = price;
    document.getElementById("prixGeneratorOne").innerHTML = secondGeneratorOneRealPrice;
    document.getElementById("generatorOneOwned").innerHTML = secondGeneratorBaseOwned;
    document.getElementById("generatorOneOwnedTotal").innerHTML = secondGeneratorOwnedTotal;
    document.getElementById("generatorTwoOwned").innerHTML = secondGeneratorTwoBaseOwned;
    document.getElementById("generatorTwoOwnedTotal").innerHTML = secondGeneratorTwoOwnedTotal;
    document.getElementById("prixGeneratorTwo").innerHTML = secondGeneratorTwoRealPrice;
    updateButtons();
}

function updateButtons() {
    if (time < price) {
        document.getElementById("timebtn").setAttribute("disabled", "disabled");
    } else {
        document.getElementById("timebtn").removeAttribute("disabled");
    }

    if (time < secondGeneratorOneRealPrice) {
        document.getElementById("secondGeneratorOne").setAttribute("disabled", "disabled");
    } else {
        document.getElementById("secondGeneratorOne").removeAttribute("disabled");
    }

    if (time < secondGeneratorTwoRealPrice) {
        document.getElementById("secondGeneratorTwo").setAttribute("disabled", "disabled");
    } else {
        document.getElementById("secondGeneratorTwo").removeAttribute("disabled");
    }
}

function letsGo() {
   ticks = setInterval(updateTime, timeOut);
}

function watchFaster() {
    if (time > price) {
        clearInterval(ticks);
        time -= price;
        price *= 3;
        timeOut /= 2;
        letsGo();
    }
}

function buyGeneratorOne() {
    if (time > secondGeneratorOneRealPrice) {
        time -= secondGeneratorOneRealPrice;
        secondGeneratorBaseOwned += 1;
        secondGeneratorOwnedTotal += 1;
        secondGeneratorOneRealPrice *= 1.5;
    }
}

function buyGeneratorTwo() {
    if (time > secondGeneratorTwoRealPrice) {
        time -= secondGeneratorTwoRealPrice;
        secondGeneratorTwoBaseOwned += 1;
        secondGeneratorTwoOwnedTotal += 1;
        secondGeneratorTwoRealPrice *= 2.3;
    }
}

letsGo();