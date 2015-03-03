$(document).ready(function() {
	
	$("#toon_gebruiker").val(load("toon_gebruiker")).slider("refresh");
	$("#toon_tijd").val(load("toon_tijd")).slider("refresh");
	
	$("#btn_save").click(function() {
		save("toon_gebruiker", $("#toon_gebruiker").val());
		save("toon_tijd", $("#toon_tijd").val());

        // Redirect naar index
        window.location = "index.html";
	});

});