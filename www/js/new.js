function TodoOpslaan() {
    var gebruiker = $("#gebruiker").val();
    var beschrijving = $("#beschrijving").val();
    
    if (gebruiker == "" || beschrijving == "")
    {
        alert("Vul een gebruiker en beschrijving in");
    }
    else
    {
        dbShell.transaction(function(tx) {
            tx.executeSql("insert into todos(gebruiker,beschrijving,aangemaaktOp) values(?,?,?)", [gebruiker, beschrijving, new Date()]);
        }, dbErrorHandler, OpslaanGelukt);
    }
}

function OpslaanGelukt() {
    $("#gebruiker").val("");
    $("#beschrijving").val("");
    
    window.location = "index.html";
}

$(document).ready(function() {
    $("#toevoegen").click(TodoOpslaan);
});


// Werkt niet
$(document).on("pagebeforehide","#new",function(){
	save("gebruiker", $("#gebruiker").val());
	save("beschrijving", $("#beschrijving").val());
});

// Werkt niet
$(document).on("pagebeforeshow","#new",function(){
	$("#gebruiker").val(load("gebruiker"));
    $("#beschrijving").val(load("beschrijving"));
});
