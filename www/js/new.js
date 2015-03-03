function TodoOpslaan() {
    // Laad de waarden van de velden.
    var gebruiker = $("#gebruiker").val();
    var beschrijving = $("#beschrijving").val();

    // Controleer of er waarden zijn
    if (gebruiker == "" || beschrijving == "")
    {
        alert("Vul een gebruiker en beschrijving in");
    }
    else
    {
        // Insert de waarden in de webSQL database
        dbShell.transaction(function(tx) {
            tx.executeSql("insert into todos(gebruiker,beschrijving,aangemaaktOp) values(?,?,?)", [gebruiker, beschrijving, new Date()]);
        }, dbErrorHandler, OpslaanGelukt);
    }
}

function OpslaanGelukt() {
    // Leeg de velden
    $("#gebruiker").val("");
    $("#beschrijving").val("");

    // Redirect naar index, hierbij worden automatish de localStorage waarden leeggemaakt (door unload event)
    window.location = "index.html";
}

$(document).ready(function() {
    // Laad eventueel opgeslagen waarden
    $("#gebruiker").val(load("gebruiker"));
    $("#beschrijving").val(load("beschrijving"));

    // Bind de event handler aan de toevoegen knop
    $("#toevoegen").click(TodoOpslaan);
});

$(window).unload(function(){
    // Sla de waarden van de to-do velden op in localStorage
	save("gebruiker", $("#gebruiker").val());
	save("beschrijving", $("#beschrijving").val());
});