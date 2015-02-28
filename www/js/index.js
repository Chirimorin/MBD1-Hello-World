function displayTodos(tx, rs) {
    // Maak een string voor de lijst
    var list = "";

    // Loop door alle resultaten
    for (i = 0; i < rs.rows.length; i++) {
        // resultaat ophalen
        var row = rs.rows.item(i);

        // Voeg de todo toe aan de lijst
        list += '<li class="note"><span class="naam">' + row.gebruiker + '</span><span class="datum">' + row.aangemaaktOp.split("GMT")[0] + '</span><br /><span class="bericht">' + row.beschrijving + '</span></li>'
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

