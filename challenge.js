const grafiek = document.getElementById("grafiek")

const staafdiagram = document.createElement("div");
staafdiagram.id= "staafdiagram";
staafdiagram.style.backgroundColor = "grey";
staafdiagram.style.height = "300px";
staafdiagram.style.width = "400px";

// for loop in de recente informatie 
// (voeg toe tot klaar dan maak gemiddelde doe dat over meerdere dagen kijk naar dagen tot dit punt en kijk waar het uit zo komen)
// voeg de uitslagen toe in lijnen en punten toe door te kijken wat de vorige en het verschil met de volgende ois om mogelijk dde toekomst te voorspeellen

grafiek.appendChild(staafdiagram);