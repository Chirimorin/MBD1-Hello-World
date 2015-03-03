// Slaat een object op in localstorage.
function save(name,value) {
    localStorage.setItem(name, JSON.stringify(value));
}

// Laad een object uit localstorage.
function load(name) {
    return JSON.parse(localStorage.getItem(name));
}

// WebSQL database laden
var dbShell;
function loadDatabase() {
    dbShell = window.openDatabase("ToDos", 1, "ToDos", 1000000);
    dbShell.transaction(setupTable,dbErrorHandler);
}

// Tabel opzetten voor webSQL
function setupTable(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS todos(id INTEGER PRIMARY KEY, gebruiker, beschrijving, aangemaaktOp)");
}

// Error callback voor WebSQL
function dbErrorHandler(err) {
    alert("DB Error: "+err.message + "\nCode="+err.code);
}

// Laad de database als de pagina klaar is met laden
$(document).ready(function() {
    loadDatabase();
});