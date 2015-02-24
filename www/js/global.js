function save(name,value)
{
    localStorage.setItem(name, JSON.stringify(value));
}

function load(name)
{
    return JSON.parse(localStorage.getItem(name));
}