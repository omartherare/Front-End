var prijsSmartphone = parseFloat(window.prompt("Gelieve de aankoopprijs in te geven voor taxen"));
var belastingsBedrag = 0.21;

var geldRekening = parseFloat(window.prompt("Hoeveel geld staat er op u rekening?"));

function belastingsBerekening() {
	return this.prijsSmartphone * this.belastingsBedrag;
}

var totaleKosten = this.prijsSmartphone + this.belastingsBerekening();

window.alert("De totale kost na belasting bedraagt: " + totaleKosten.toFixed(2)+" Euro");

if (totaleKosten>geldRekening){
    window.alert("U heeft te weinig geld");
}
else{
    var restWaarde=parseFloat(geldRekening-totaleKosten);
    window.alert("Hoera u kan het kopen, u heeft nog "+restWaarde.toFixed(2)+" Euro over \nU heeft "+belastingsBerekening()+" Euro aan belastingen betaald.");
}



