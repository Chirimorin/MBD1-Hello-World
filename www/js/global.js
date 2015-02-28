function save(name,value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function load(name) {
    return JSON.parse(localStorage.getItem(name));
}


var dbShell;
function loadDatabase() {
    dbShell = window.openDatabase("ToDos", 1, "ToDos", 1000000);
    dbShell.transaction(setupTable,dbErrorHandler);
}

function setupTable(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS todos(id INTEGER PRIMARY KEY, gebruiker, beschrijving, aangemaaktOp)");
}

function dbErrorHandler(err) {
    alert("DB Error: "+err.message + "\nCode="+err.code);
}

$(document).ready(function() {
    loadDatabase();
});