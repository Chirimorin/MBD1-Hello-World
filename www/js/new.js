function TodoOpslaan() {
    var gebruiker = $("#gebruiker").val();
    var beschrijving = $("#beschrijving").val();
    
    if (gebruiker == "" || beschrijving == "")
    {
        alert("Vul een gebruiker en bescrijving in");
    }
    else
    {
        dbShell.transaction(function(tx) {
            tx.executeSql("insert into todos(gebruiker,beschrijving,aangemaaktOp) values(?,?,?)", [gebruiker, beschrijving, new Date()]);
        }, dbErrorHandler, OpslaanGelukt);
        alert("Gebruiker: " + gebruiker + "\nbeschrijving: " + beschrijving);
    }
}

function OpslaanGelukt() {
    $("#gebruiker").val("");
    $("#beschrijving").val("");
}

$(document).ready(function() {
    loadDatabase(); 
    
    $("#toevoegen").click(TodoOpslaan);
});
