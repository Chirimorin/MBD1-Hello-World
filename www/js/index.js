function displayTodos(tx, rs) {
    // Maak een string voor de lijst
    var list = "";

    // Haalt settings op
    var toon_gebruiker = load("toon_gebruiker");
    var toon_tijd = load("toon_tijd");

    // Loop door alle resultaten
    for (i = 0; i < rs.rows.length; i++) {
		// Haalt resultaat op
        var row = rs.rows.item(i);
        
		list += '<li class="note">';
		
		// Toont gebruiker
		if (toon_gebruiker == "Aan") {
			list += '<span class="naam">' + row.gebruiker + '</span>';
		}
		
		// Toon tijd
		if (toon_tijd == "Aan") {
			list += '<span class="datum">' + row.aangemaaktOp.split("GMT")[0] + '</span>';
		}
		
		if (toon_gebruiker == "Aan" || toon_tijd == "Aan"){
			list += '<br />';
		}
		
		// Voeg de todo toe aan de lijst
		list += '<span class="bericht">' + row.beschrijving + '</span></li>';
    }

    // Verwijder bestaande notes en voeg de gevonden notes toe aan de lijst.
    $(".note").remove();
    $("#notes").append(list).listview().listview("refresh");
}

$(document).ready(function() {
    dbShell.transaction(function(tx) {
        tx.executeSql("SELECT * from todos", [], displayTodos);
    }, dbErrorHandler);
});

